import React, { useEffect } from 'react';
import 'aframe';

const VRExperience: React.FC = () => {
  useEffect(() => {
    // Basic camera movement logic if needed
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <button 
        onClick={() => window.history.back()}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Back to Dashboard
      </button>

      <a-scene embedded style={{ width: '100%', height: '100%' }}>
        <a-sky color="#030014"></a-sky>
        
        {/* Futuristic Platform */}
        <a-cylinder 
          position="0 0.1 0" 
          radius="10" 
          height="0.2" 
          color="#1e1b4b"
          segments-radial="32"
          material="opacity: 0.8; transparent: true; emissive: #6366f1; emissiveIntensity: 0.2"
        ></a-cylinder>

        {/* Ambient Grid for depth */}
        <a-grid-helper size="20" divisions="20" color-center-line="#6366f1" color-grid="#1e1b4b"></a-grid-helper>

        {/* Floating Objects */}
        <a-box 
          className="clickable"
          position="-2 1.5 -5" 
          rotation="0 45 0" 
          color="#a855f7"
          animation="property: rotation; to: 0 405 0; loop: true; dur: 10000"
        ></a-box>

        <a-sphere 
          className="clickable"
          position="2 1.8 -4" 
          radius="0.75" 
          color="#6366f1"
          animation="property: position; to: 2 2.2 -4; dir: alternate; loop: true; dur: 3000"
        ></a-sphere>

        <a-torus-knot 
          className="clickable"
          position="0 3 -8" 
          radius="1" 
          radius-tubular="0.2" 
          color="#ec4899"
          animation="property: rotation; to: 405 405 405; loop: true; dur: 8000"
        ></a-torus-knot>

        {/* Lighting */}
        <a-light type="ambient" color="#445451"></a-light>
        <a-light type="point" intensity="2" position="2 4 4" color="#6366f1"></a-light>
        
        <a-entity camera look-controls position="0 1.6 0">
           <a-cursor 
             color="#ec4899"
             fuse="true"
             fuse-timeout="1500"
             raycaster="objects: .clickable"
             animation__fusing="property: scale; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"
             animation__mouseleave="property: scale; startEvents: mouseleave; to: 1 1 1; dur: 500"
           ></a-cursor>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default VRExperience;
