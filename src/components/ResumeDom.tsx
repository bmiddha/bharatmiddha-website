import React, { FC } from 'react';
import { Row, Col } from 'reactstrap';
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
        <Row>
          <Col>
            <h4>{e.organization ? e.organization : ''}</h4>
            <h5>{e.position ? e.position : ''}</h5>
          </Col>
          <Col md={'auto'} className="text-right">
            <h5>{e.location ? e.location : ''}</h5>
            <p>{`${e.start ? e.start : ''} - ${e.end ? e.end : ''}`}</p>
          </Col>
        </Row>
        <ul>{e.points ? e.points.map((s, key) => <li key={`${key}-${s}`}>{s}</li>) : <></>}</ul>
      </div>
    ));

  return (
    <article>
      <header>
        <h2>{name}</h2>
        <Row className="lead">
          <Col>
            <p className="lead">{summary}</p>
          </Col>
          <Col className="text-right">
            <p>{email}</p>
            <p>{location}</p>
            <p>
              <a href={links.github}>GitHub</a>
            </p>
            <p>
              <a href={links.linkedin}>Linkedin</a>
            </p>
            <p>
              <a href={links.website}>Website</a>
            </p>
          </Col>
        </Row>
      </header>
      <section className="border-top pt-4">
        <h3>Skills</h3>
        {skills.map((e, key) => (
          <div key={`${key}-${e.title}`}>
            <h4>{e.title}</h4>
            <ul className="inline-list">
              {e.values.map((s, key) => (
                <li key={`${key}-${s}`}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="border-top pt-4">
        <h3>Education</h3>
        {education.map((e, key) => (
          <div key={`${key}-${e.school}`}>
            <h4>{e.school}</h4>
            <h5>{e.degree}</h5>
            <p>{`${e.start} - ${e.end}`}</p>
          </div>
        ))}
      </section>
      <section className="border-top pt-4">
        <h3>Experience</h3>
        {sectionMapper(experience)}
      </section>
      <section className="border-top pt-4">
        <h3>Professional Associations</h3>
        {sectionMapper(associations)}
      </section>
      <section className="border-top pt-4">
        <h3>Volunteer Work</h3>
        {sectionMapper(volunteer)}
      </section>
    </article>
  );
};

export default ResumeDom;
