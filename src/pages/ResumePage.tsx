import React, { FC, useState, useEffect } from 'react';
import { Row, Col, Container, Button, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Resume from '../components/Resume';
import ResumePdf from '../components/ResumePdf';
import { ResumeData } from '../models/ResumeData';

export const ResumePage: FC = () => {
  const [genPdf, setGenPdf] = useState(false);
  const [data, setData] = useState<ResumeData>();
  useEffect(() => {
    const fetchData = async () =>
      setData(await (await fetch('https://api.bmiddha.com/rest/resume')).json());
    fetchData();
  }, []);
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="wack">Resume</h1>
        </Col>
        <Col>
          <div className="resume-align-right">
            {data && !genPdf ? (
              <Button color="info" onClick={() => setGenPdf(!genPdf)}>
                Generate PDF <FontAwesomeIcon icon={faFilePdf} />
              </Button>
            ) : data && genPdf ? (
              <ResumePdf data={data} />
            ) : (
              <></>
            )}
          </div>
        </Col>
      </Row>
      {data ? (
        <Resume data={data} />
      ) : (
        <div className="d-flex align-items-center">
          <Spinner className="mr-2" type="grow" />
        </div>
      )}
    </Container>
  );
};

export default ResumePage;
