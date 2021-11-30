import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import Timeline from '../components/Timeline';

import competitions from '../data/competitions.json';
import work from '../data/work.json';
import projects from '../data/projects.json';

const Resume = () => (
  <Page title="Resume">
    <p>Hello! I'm Wen Jun. I picked up programming on my own in 2014 and have been hooked ever since. I enjoy using technology to create things to help people in their daily lives.</p>

    <h2>Work Experience</h2>
    <Timeline data={work} />

    <h2><Link to="/projects">Projects</Link></h2>
    <Timeline data={projects} isProject />

    <h2>Competitions</h2>
    <Timeline data={competitions} />
  </Page>
);

export default Resume;
