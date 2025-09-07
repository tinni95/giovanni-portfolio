"use client";
import React from "react";
import Image from "next/image";

export default function WebExperienceFull({ webVideo, title }) {
  if (!webVideo) return null;

  const openVimeoFullscreen = () => {
    window.open(`https://vimeo.com/${webVideo}`, '_blank');
  };

  return (
    <div className="project-details-video-wrapper mt-5">
      <h3 className="mini-title mb-4">Web Experience</h3>
      
      {/* iOS-style Screen Container */}
      <div className="flex justify-center items-center w-full">
        <div 
          className="relative cursor-pointer group"
          onClick={openVimeoFullscreen}
          style={{
            width: '90%',
            maxWidth: '1200px',
            aspectRatio: '16/9',
          }}
        >
          {/* iOS-style Screen Frame */}
          <div className="relative w-full h-full bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-4">
            {/* Screen Bezel */}
            <div className="w-full h-full bg-black rounded-[2rem] p-1">
              {/* Screen Content */}
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <iframe
                  src={`https://player.vimeo.com/video/${webVideo}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="w-full h-full object-cover rounded-[1.5rem]"
                  title="Web Experience Demo"
                />
                
                {/* Overlay for click interaction */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-[1.5rem] flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-4 shadow-lg">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Home Indicator (iOS-style) */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-4 text-sm text-foreground/60 font-medium">Web Experience - Click to open in Vimeo</p>
    </div>
  );
}
