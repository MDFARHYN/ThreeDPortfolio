// SafeHtmlRenderer.js
import React from 'react';
import DOMPurify from 'dompurify';

const SafeHtmlRenderer = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
  );
};

export default SafeHtmlRenderer;
