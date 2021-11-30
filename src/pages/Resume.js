import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from 'antd';

import Page from '../components/Page';
import Timeline from '../components/Timeline';

import competitions from '../data/competitions.json';
import work from '../data/work.json';
import projects from '../data/projects.json';

const Resume = () => (
  <Page title="Resume">
    <p>Hello! I'm Wen Jun. I picked up programming on my own in 2014 and have been hooked ever since. I enjoy using technology to create things to help people in their daily lives.</p>

    <Anchor>
      <Anchor.Link href="#work-experience" title="Work Experience" />
      <Anchor.Link href="#projects" title="Projects" />
      <Anchor.Link href="#competitions" title="Competitions" />
    </Anchor>
    
    <h2 id="work-experience">Work Experience</h2>
    <Timeline data={work} />

    <h2 id="projects"><Link to="/projects">Projects</Link></h2>
    <Timeline data={projects} isProject />

    <h2 id="competitions">Competitions</h2>
    <Timeline data={competitions} />
    <div className="spacer" />
  </Page>
);

export default Resume;
