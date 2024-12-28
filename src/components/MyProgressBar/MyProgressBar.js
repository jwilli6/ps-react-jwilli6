import React from 'react';

const MyProgressBar = ({ progress }) => (
  <div>
    <div
      style={{
        width: `${progress}%`,
        backgroundColor: 'blue',
        height: '20px',
      }}
      data-testid="progress-bar"
    />
  </div>
);

export default MyProgressBar;