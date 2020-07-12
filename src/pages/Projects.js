import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Link, Switch, Route, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import Page from '../components/Page';
import TagsList from '../components/TagsList';
import PhotoGallery from '../components/PhotoGallery';

import projects from '../data/projects.json';

const ProjectWriteup = () => {
  const { projectId } = useParams();
  const {year, title, icon, tags, gallery} = projects[projectId];
  const [writeup, setWriteup] = useState('');

  useEffect(() => {
    fetch(require(`../data/projects/${projectId}.md`))
    .then(response => response.text())
    .then(response => setWriteup(response))
  }, [projectId])

  return (
    <Page title={title} subTitle={year} avatar={{src: require(`../data/assets/${icon}`), size: 50}}>
      <TagsList tags={tags} />
      <PhotoGallery photos={gallery.map(src => require(`../data/assets/${projectId}/${src}`))} />
      <article>
        <ReactMarkdown
          source={writeup}
          linkTarget="_blank"
          transformImageUri={uri => require('../data/assets/' + uri)}
        />
      </article>
    </Page>
  );
}

const ProjectsList = () => (
  <Page title="Projects">
    <div className="projects-list">
      {Object.values(projects).map(({id, shortTitle, icon}) => (
        <Link to={`/projects/${id}`} key={id}>
          <Card className="project-item">
            <h4>{shortTitle}</h4>
            <img
              className="icon"
              src={require(`../data/assets/${icon}`)}
              alt="icon"
            />
          </Card>
        </Link>
      ))}
    </div>
  </Page>
)


const Projects = () => (
  <Switch>
    <Route path="/projects/:projectId"><ProjectWriteup /></Route>
    <Route path="/projects"><ProjectsList /></Route>
  </Switch>
)

export default Projects;
