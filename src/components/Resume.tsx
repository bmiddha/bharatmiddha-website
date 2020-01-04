import React, { FC, useState } from 'react';
import { Button } from 'reactstrap';
import ResumeDom from './ResumeDom';
import ResumePdf from './ResumePdf';

export const Resume: FC = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const [renderPdf, setRenderPdf] = useState<boolean>(
    urlSearchParams.has('format') && urlSearchParams.get('format') === 'pdf'
  );
  return (
    <>
      <Button onClick={() => setRenderPdf(!renderPdf)}>Render {renderPdf ? 'HTML' : 'PDF'}</Button>
      {renderPdf ? <ResumePdf /> : <ResumeDom />}
    </>
  );
};

export default Resume;
