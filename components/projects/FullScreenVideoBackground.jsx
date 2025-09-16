"use client";

import React, { useEffect, useState } from "react";

export default function FullScreenVideoBackground({ webVideo, title }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!webVideo || !isClient) return null;

  return (
    <div 
      className="fullscreen-video-section"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        marginLeft: 'calc(-50vw + 50%)',
        marginTop: '80px',
        overflow: 'hidden'
      }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${webVideo}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          objectFit: 'cover'
        }}
        title="Full Screen Project Demo"
      />
      
      {/* Overlay for readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div 
          style={{
            textAlign: 'center',
            color: 'white',
            zIndex: 3,
            maxWidth: '800px',
            padding: '0 20px'
          }}
        >
          <h2 
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            {title}
          </h2>
          <p 
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
              opacity: 0.9
            }}
          >
            Experience the full project in action
          </p>
        </div>
      </div>
    </div>
  );
}
