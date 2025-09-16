"use client";

import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Appointment from "./Appointment";
import { IPhoneFrame } from "../IPhoneFrame";
import WebExperience from "./WebExperience";
import WebExperienceFull from "./WebExperiencFull";
import FullScreenVideoBackground from "./FullScreenVideoBackground";

export default function ProjectDetails({ portfolioItem }) {
  // Markdown content is now processed at build time and included in portfolioItem.markdownContent

  return (
    <div className="project-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-thumnail-wrap" style={{ position: 'relative' }}>
              <Image
                alt="thumbnail"
                src={portfolioItem.imageSrc}
                width={1290}
                height={560}
              />
              {portfolioItem.livelink && (
                <a
                  href={portfolioItem.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link-button"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(0, 255, 65, 0.8)',
                    color: 'black',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    boxShadow: '0 4px 12px rgba(0, 255, 65, 0.3)',
                    transition: 'all 0.3s ease',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#00CC33';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0, 255, 65, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#00FF41';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 255, 65, 0.3)';
                  }}
                >
                  <i className="fa-solid fa-external-link-alt" style={{ fontSize: '12px' }}></i>
                  <b>Live Link</b>
                </a>
              )}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="project-details-content-wrap">
              {/* Dynamic Markdown Content Section */}
              {portfolioItem.markdownContent && (
                <div className="project-details-markdown-content markdown-content">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({children}) => <h1 className="title">{children}</h1>,
                      h2: ({children}) => <h2 className="mini-title">{children}</h2>,
                      h3: ({children}) => <h3 className="section-title">{children}</h3>,
                      p: ({children}) => <p className="docs">{children}</p>,
                      ul: ({children}) => <ul className="check-box-wrap">{children}</ul>,
                      li: ({children}) => (
                        <li className="check-box-item">
                          <span>
                            <i className="fa-solid fa-circle-check" />
                          </span>
                          <span className="check-box-text">{children}</span>
                        </li>
                      ),
                      strong: ({children}) => <strong className="font-semibold">{children}</strong>,
                      code: ({children}) => <code className="bg-gray-100 px-2 py-1 rounded text-sm">{children}</code>,
                      blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">{children}</blockquote>
                    }}
                  >
                    {portfolioItem.markdownContent}
                  </ReactMarkdown>
                </div>
              )}
             
              <div className="project-details-swiper-wrapper">
                
              </div>
              </div>
              
              {/* Showcase Image Section */}
              {portfolioItem.showcase && (
                <div className="project-showcase-wrapper" style={{ marginTop: '40px', marginBottom: '40px' }}>
                  <div className="project-showcase-image">
                    <Image
                      alt={`${portfolioItem.title} showcase`}
                      src={portfolioItem.showcase}
                      width={1290}
                      height={800}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </div>
                </div>
              )}
              
 
            </div>
          <div className="col-lg-4">
            <div className="signle-side-bar project-details-area tmponhover">
              <div className="header">
                <h3 className="title">Project Details</h3>
              </div>
              <div className="body">
                <div className="project-details-info">
                  Name: <span>{portfolioItem.projectDetails?.name || portfolioItem.title}</span>
                </div>
  
                <div className="project-details-info">
                  Date: <span>{portfolioItem.projectDetails?.date || "2024"}</span>
                </div>
                <div className="project-details-info">
                  Tags: <span>{portfolioItem.projectDetails?.tags || portfolioItem.tags?.join(", ") || "Development"}</span>
                </div>
              </div>
            </div>
            
     
            {/* Separate sticky iPhone frame container */}
                <IPhoneFrame vimeoId={portfolioItem.appVideo} className="drop-shadow-2xl" />
               
          </div>
        </div>
      </div>
      
      {/* Full Screen Video Background */}
      <FullScreenVideoBackground 
        webVideo={portfolioItem.webVideo} 
        title={portfolioItem.title} 
      />
    </div>
  );
}
