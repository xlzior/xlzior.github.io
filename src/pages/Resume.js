import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import Timeline from '../components/Timeline';

import competitions from '../data/competitions.json';
import work from '../data/work.json';
import projects from '../data/projects.json';

const Resume = () => (
  <Page title="Resume">
    <p>My name is Wen Jun. I started self-learning programming in 2014 and since then, I've picked up Python and JavaScript.</p>

    <h2>Work Experience</h2>
    <Timeline data={work} />

    <h2>Programming Experience</h2>
    <p>Proficiencies: Python, HTML, CSS, JavaScript (React, React Native)</p>

    <h3><Link to="/projects">Projects</Link></h3>
    <Timeline data={projects} isProject />

    <h3>Competitions</h3>
    <Timeline data={competitions} />
  </Page>
);

export default Resume;
