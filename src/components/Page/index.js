import React from 'react';
import { PageHeader } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { titleize } from 'inflection';
import { Link } from 'react-router-dom';

import "./index.css";

const itemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={route.path}>{route.breadcrumbName}</Link>
  );
}

const homeBreadcrumb = {
  path: '/',
  breadcrumbName: <HomeOutlined />
}

const generateBreadcrumb = () => [
  homeBreadcrumb,
  ...window.location.hash
  .split('/')
  .filter(Boolean)
  .filter(str => str !== '#')
  .map((path, idx, arr) => ({
    path: '/' + arr.slice(0, idx + 1).join('/'),
    breadcrumbName: titleize(path.replace(/-/g, ' '))
  }))
];

const Page = ({title, subTitle="", avatar, children}) => (
  <div className="page-wrapper">
    <main className="page">
    <PageHeader
      className="page-header"
      title={title}
      subTitle={subTitle}
      avatar={avatar}
      breadcrumb={{ routes: generateBreadcrumb(), itemRender }}
    />
    {children}
  </main>
  </div>
)

export default Page;
