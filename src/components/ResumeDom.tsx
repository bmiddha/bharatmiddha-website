import React, { FC } from 'react';
import { ResumeData } from '../ResumeData';

export const ResumeDom: FC = () => {
  const {
    name,
    location,
    email,
    summary,
    links,
    skills,
    education,
    experience,
    projects,
    volunteer,
    associations
  } = ResumeData;

  type OrgSection = {
    organization?: string;
    start?: string;
    end?: string;
    position?: string;
    points?: string[];
    location?: string;
  };

  const sectionMapper = (sectionKey: OrgSection[]) =>
    sectionKey.map((e, key) => (
      <div key={`${key}-${e.organization}`}>
        <h4>{e.organization ? e.organization : ''}</h4>
        <h5>{e.location ? e.location : ''}</h5>
        <h5>{e.position ? e.position : ''}</h5>
        <p>{`${e.start ? e.start : ''} - ${e.end ? e.end : ''}`}</p>
        <ul>{e.points ? e.points.map((s, key) => <li key={`${key}-${s}`}>{s}</li>) : <></>}</ul>
      </div>
    ));

  return (
    <article>
      <header>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{location}</p>
        <p>
          {links.github} | {links.linkedin} | {links.website}
        </p>
        <p>{summary}</p>
      </header>
      <section>
        <h3>Skills</h3>
        {skills.map((e, key) => (
          <div key={`${key}-${e.title}`}>
            <h4>{e.title}</h4>
            <ul>
              {e.values.map((s, key) => (
                <li key={`${key}-${s}`}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h3>Education</h3>
        {education.map((e, key) => (
          <div key={`${key}-${e.school}`}>
            <h4>{e.school}</h4>
            <h5>{e.degree}</h5>
            <p>{`${e.start} - ${e.end}`}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Experience</h3>
        {sectionMapper(experience)}
      </section>
      <section>
        <h3>Professional Associations</h3>
        {sectionMapper(associations)}
      </section>
      <section>
        <h3>Volunteer Work</h3>
        {sectionMapper(volunteer)}
      </section>
      {/* <section>
        <h3>Projects</h3>
        {projects.map((e, key) => (
          <div key={`${key}-${e.name}`}>
            <h4>{e.name}</h4>
            <h5>{e.link}</h5>
            <ul>
              {e.technologies.map((s, key) => (
                <li key={`${key}-${s}`}>{s}</li>
              ))}
            </ul>
            <ul>
              {e.points.map((s, key) => (
                <li key={`${key}-${s}`}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section> */}
    </article>
  );
};

export default ResumeDom;
