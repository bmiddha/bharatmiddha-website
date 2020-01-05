import React, { FC } from 'react';
import { Row, Col } from 'reactstrap';
import { ResumeData } from '../ResumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
export const Resume: FC = () => {
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
          <Col lg={'auto'} className="resume-align-right">
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
        <Row className="lead">
          <Col>
            <h2>{name}</h2>
            {summary.map((e, key) => (
              <p key={key} className="lead">
                {e}
              </p>
            ))}
          </Col>
          <Col md={'auto'} className="resume-align-right">
            <p>
              {location} <FontAwesomeIcon icon={faMapMarkerAlt} />
            </p>
            <p>
              <a href={`mailto:${email}`}>
                Email <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </p>
            <p>
              <a href={links.github}>
                GitHub <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
            <p>
              <a href={links.linkedin}>
                Linkedin <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
            <p>
              <a href={links.website}>
                Website <FontAwesomeIcon icon={faChrome} />
              </a>
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

export default Resume;
