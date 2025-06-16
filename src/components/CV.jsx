import React from "react";

const CV = () => {
  return (
    <div className="section md:px-12">
      <h1>Curriculum Vitae</h1>
      <p className="text-gray-700">Download or view my CV below:</p>

      <div style={{ margin: "1rem 0" }}>
        <a
          href="/cv/CWooten_CV.pdf"
          download
          className="text-blue-600 hover:underline"
        >
          Download CV (PDF)
        </a>
      </div>

      <div style={{ height: "80vh", border: "1px solid #ccc" }}>
        <iframe
          title="CV Preview"
          src="/cv/CWooten_CV.pdf"
          width="100%"
          height="100%"
          style={{
            border: "none",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default CV;

