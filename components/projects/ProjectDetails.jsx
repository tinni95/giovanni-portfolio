import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Appointment from "./Appointment";
import { IPhoneFrame } from "../IPhoneFrame";
import WebExperience from "./WebExperience";
import WebExperienceFull from "./WebExperiencFull";

export default function ProjectDetails({ portfolioItem }) {
  // Markdown content is now processed at build time and included in portfolioItem.markdownContent

  return (
    <div className="project-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-thumnail-wrap">
              <Image
                alt="thumbnail"
                src={portfolioItem.imageSrc}
                width={1290}
                height={560}
              />
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
                      ul: ({children}) => <ul className="check-box-wrap"><li>{children}</li></ul>,
                      li: ({children}) => (
                        <h4 className="check-box-item">
                          <span>
                            <i className="fa-solid fa-circle-check" />
                          </span>
                          {children}
                        </h4>
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
                <div className="swiper project-details-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image
                          alt="swiper-img"
                          src="/assets/images/projects-details/project-detials-swiper-img-1.jpg"
                          width={410}
                          height={295}
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image
                          alt="swiper-img"
                          src="/assets/images/projects-details/project-detials-swiper-img-2.png"
                          width={410}
                          height={295}
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image
                          alt="swiper-img"
                          src="/assets/images/projects-details/project-detials-swiper-img-1.jpg"
                          width={410}
                          height={295}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-details-swiper-btn">
                  <div className="project-swiper-button-prev">
                    <span>
                      <i className="fa-solid fa-arrow-left" />
                    </span>
                    Previous
                  </div>
                  <div className="project-swiper-button-next">
                    Next{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
              </div>
              
              {/* Web Video Section */}
              <WebExperienceFull webVideo={portfolioItem.webVideo} title={portfolioItem.title} />
 
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
            <div className="sticky-iphone-frame" style={{ position: 'sticky', top: '120px', marginTop: '30px' }}>
              <div className="transform hover:scale-105 transition-all duration-300">
                <IPhoneFrame vimeoId={portfolioItem.appVideo} className="drop-shadow-2xl" />
                <p className="text-center mt-4 text-sm text-foreground/60 font-medium">Mobile Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
