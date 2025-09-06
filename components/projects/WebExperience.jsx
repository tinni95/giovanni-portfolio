"use client";
import React from "react";
import Image from "next/image";

export default function WebExperience({ webVideo, title }) {
  if (!webVideo) return null;

  const openVimeoFullscreen = () => {
    window.open(`https://vimeo.com/${webVideo}`, '_blank');
  };

  return (
    <div className="project-details-video-wrapper mt-5">
      <h3 className="mini-title mb-4">Web Experience</h3>
      <div className="relative mx-auto" style={{ maxWidth: '1300px' }}>
        {/* MacBook Frame Container - Clickable */}
        <div 
          className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={openVimeoFullscreen}
        >
          {/* MacBook PNG Image */}
          <Image
            src="/assets/images/portfolio/macbook.png"
            alt="MacBook Frame - Click to expand"
            width={1300}
            height={500}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
          
          {/* Video Container positioned over the MacBook screen */}
          <div 
            className="absolute flex items-center justify-center"
            style={{
              // Position the video to fit within the MacBook screen area
              top: '28%',
              left: '15%',
              right: '15%',
              bottom: '27%',
            }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden shadow-inner">
              <iframe
                src={`https://player.vimeo.com/video/${webVideo}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full object-cover"
                title="Web Experience Demo"
              />
            </div>
          </div>
          
          {/* Click overlay indicator */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg">
            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-foreground/60 font-medium">Web Experience - Click to open in Vimeo</p>
    </div>
  );
}
