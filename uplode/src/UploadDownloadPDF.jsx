import React, { useState } from 'react';

const UploadDownloadPDF = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const pdfs = files.filter(file => file.type === 'application/pdf');

    if (pdfs.length !== files.length) {
      alert('Some files are not PDF and were not added');
    }

    setPdfFiles(prevFiles => [...prevFiles, ...pdfs]);
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', file.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (index) => {
    setPdfFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input type="file" accept="application/pdf" onChange={handleFileChange} multiple />
      <div style={{ marginTop: '20px' }}>
        {pdfFiles.map((file, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <p>{file.name}</p>
            <button onClick={() => handleDownload(file)} style={{ marginRight: '10px' }}>
              Download
            </button>
            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadDownloadPDF;
