import React from 'react';
import { Tag } from 'antd';

const LANGUAGES = '#faad14';
const FRAMEWORKS = '#2db7f5';
const API = '#2db7f5';
const FIELDS = '#87d068';

const getTagColour = name => {
  switch (name) {
    case 'JavaScript':
    case 'TypeScript':
    case 'Node.js':
    case 'Python':
    case 'Postgresql':
      return LANGUAGES;
    case 'React':
    case 'Redux':
    case 'React Native':
    case 'scrapy':
    case 'Google App Engine':
      return FRAMEWORKS;
    case 'Telegram Bot API':
      return API;
    case 'web development':
    case 'app development':
    case 'web scraping':
    case 'data science':
      return FIELDS;
    case 'Heroku':
      return '#79589F'
    default:
      return null;
  }
}

const TagsList = ({tags = []}) => (
  <div className="tags-list">
    {tags.map(name => (
      <Tag color={getTagColour(name)} key={name}>{name}</Tag>
    ))}
  </div>
)

export default TagsList;