import React, { FC, useState, useEffect } from 'react';
import { Container, Table, Spinner } from 'reactstrap';

type DownloadsData = {
  filename?: string;
  url: string;
  comments?: string;
  uploaded_on?: Date;
};

export const DownloadsPage: FC = () => {
  const [data, setData] = useState<DownloadsData[]>();
  useEffect(() => {
    const fetchData = async () =>
      setData(await (await fetch('https://api.bharatmiddha.com/rest/downloads')).json());
    fetchData();
  }, []);
  console.log('data', data);
  return (
    <Container>
      <h1 className="my-4 wack">Downloads</h1>
      {data ? (
        <>
          <Table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Filename</th>
                <th scope="col">URL</th>
                <th scope="col">Comments</th>
                <th scope="col">Uploaded on</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>
                    <a href={e.url}>{e.filename ? e.filename : e.url}</a>
                  </td>
                  <td>{e.comments}</td>
                  <td>{e.uploaded_on?.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <div className="d-flex align-items-center">
          <Spinner className="mr-2" type="grow" />
        </div>
      )}
    </Container>
  );
};

export default DownloadsPage;
