import React, { FC, useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardDeck,
  CardBody,
  CardTitle,
  CardFooter,
  CardLink,
  Spinner
} from 'reactstrap';

type DownloadsData = {
  filename?: string;
  url: string;
  comments?: string;
  uploaded?: Date;
};

export const DownloadsPage: FC = () => {
  const [data, setData] = useState<DownloadsData[]>();
  useEffect(() => {
    const fetchData = async () =>
      setData(await (await fetch('https://api.bharatmiddha.com/rest/downloads')).json());
    fetchData();
  }, []);
  return (
    <Container>
      <h1 className="my-4 wack">Downloads</h1>
      {data ? (
        <CardDeck>
          {data.map((e, key) => (
            <div>
              <Card
                key={key}
                className="mt-4"
                style={{ width: '250px', height: 'calc(100% - 30px)' }}
              >
                <CardBody>
                  <CardTitle>{e.filename ? e.filename : e.url}</CardTitle>
                  <p>{e.comments}</p>
                  <CardLink href={e.url} target="_blank" rel="noopener noreferrer">
                    {e.url}
                  </CardLink>
                </CardBody>
                <CardFooter className="text-muted">
                  {e.uploaded ? `Uploaded on ${new Date(e.uploaded).toLocaleDateString()}` : ' '}
                </CardFooter>
              </Card>
            </div>
          ))}
        </CardDeck>
      ) : (
        <div className="d-flex align-items-center">
          <Spinner className="mr-2" type="grow" />
        </div>
      )}
    </Container>
  );
};

export default DownloadsPage;
