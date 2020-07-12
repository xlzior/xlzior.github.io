import React from 'react';
import { PageHeader } from 'antd';
import { Link } from "react-router-dom";

import './NavigationBar.css';

const NavigationBar = () => (
  <nav>
    <Link to="/">
      <PageHeader
        className="site-header"
        title="Lye Wen Jun"
        subTitle="web/app developer"
      />
    </Link>
    <ul>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/projects">Projects</Link></li>
    </ul>
  </nav>
);

export default NavigationBar;