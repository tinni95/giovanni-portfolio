import React from "react";
import Image from "next/image";
import { educationExperienceData } from "@/data/education";
export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop" id="resume">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Education &amp; Experience</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Empowering Creativity <br />
            through
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          Education
          <span>
            <Image
              alt="custom-line"
              src="/assets/images/custom-line/custom-line.png"
              width={81}
              height={6}
            />
          </span>
        </h2>
        <div className="row g-5">
          {educationExperienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <h4 className="edu-sub-title">{item.role}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Experiences
                  <span>
                    <Image
                      alt="custom-line"
                      src="/assets/images/custom-line/custom-line.png"
                      width={81}
                      height={6}
                    />
                  </span>
                </h2>
          
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-subtitle">experience</p>
                  <h2 className="ex-name">Accenture</h2>
                  <h3 className="ex-title">Application Developer Analyst</h3>
                  <p className="ex-para">
                    Worked as an Application Developer Analyst at Accenture, where I was responsible for developing and maintaining the company's software products.
                  </p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <p className="ex-subtitle">experience</p>
                  <h2 className="ex-name">Illio (Fintech)</h2>
                  <h3 className="ex-title">Senior Frontend Developer</h3>
                  <p className="ex-para">
                    Developed and maintained the frontend of the Illio platform,
                    relevant experienced gained into developing charts, real time finance data, tested and managed big repositories with monorepo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                 
                  <span>
                
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-subtitle">experience</p>
                  <h2 className="ex-name">Alfonsino (Food Delivery)</h2>
                  <h3 className="ex-title">React Native Developer</h3>
                  <p className="ex-para">
                    Developed and maintained the frontend of the Alfonsino mobile app,
                    relevant experienced gained into developing mobile apps, working with large user base and iterating on feedback.
                  </p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <p className="ex-subtitle">experience</p>
                  <h2 className="ex-name">Red Bull (App Development)</h2>
                  <h3 className="ex-title">Full Stack Developer</h3>
                  <p className="ex-para">
                    As A freelancer, I developed a mobile app for Red Bull, where I was responsible for architecture, design, and development. The app has been published on the App Store and Google Play Store and used for 4 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
