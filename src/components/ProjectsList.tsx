import React, { FC, useState, useEffect } from 'react';
import Project, { Repository } from './Project';
import { CardDeck } from 'reactstrap';

export const ProjectsList: FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/bmiddha/repos?type=all&sort=updated&per_page=20')
      .then(res => res.json())
      .then(setRepos)
      .catch(console.error);
  }, []);

  return (
    <CardDeck>
      {repos.map((e, key) => (
        <Project key={key} {...e} />
      ))}
    </CardDeck>
  );
};

export default ProjectsList;
