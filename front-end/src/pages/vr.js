import React from 'react';

function vrPage() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-6">Our Centers</h1>
      <h2></h2>
      <iframe
        title="vr_image"
        width="90%"
        height="500px"
        allowFullScreen="true"
        allow="accelerometer; magnetometer; gyroscope"
        style={{
          display: 'block',
          margin: '20px auto',
          border: '0 none',
          maxWidth: '880px',
          borderRadius: '8px',
          boxShadow:
            '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)',
        }}
        src="https://panoraven.com/en/embed/BZhCIkKJKc">
      </iframe>
   </div>
  )}
  export default vrPage
