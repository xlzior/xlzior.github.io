import React from 'react';
import { Timeline, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';

import TagsList from './TagsList';

import './Timeline.css';

const OptionalLink = ({ to, children }) => (
  to ?
  <Link to={to} component={Typography.Link}>{children}</Link> :
  children
);

const TimelineList = ({ data, isProject = false }) => {
  const arrayData = Array.isArray(data) ? data : Object.values(data);
  return (
    <Timeline mode="left">
      {arrayData.map(({id, year, icon, title, subtitle, body, color='green', tags}) => (
        <Timeline.Item
          color={color}
          key={id}
          label={year}
        >
          {icon ? <Avatar size="large" src={require('../data/assets/' + icon)} /> : null}
          <h3>
            <OptionalLink to={isProject ? `/projects/${id}` : null}>
              {title}{subtitle ? <span className="subtitle"> - {subtitle}</span> : ''}
            </OptionalLink>
          </h3>
          <TagsList tags={tags} />

          <p>{body}</p>
        </Timeline.Item>
      ))}
    </Timeline>
  )
};

export default TimelineList;
