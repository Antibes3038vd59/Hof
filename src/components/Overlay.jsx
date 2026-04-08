// src/components/Overlay.js
import React from 'react';

const Overlay = ({ show, toggle, sectionId, children }) => {
  return (
    <>
      <div
        className={`overlay-background ${show ? 'active' : ''}`}
        onClick={() => toggle()}
      ></div>
      <div
        className={`overlay-container ${show ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
};

export default Overlay;

