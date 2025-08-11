import React from "react";

export default function About() {
  return (
    <div className="banner-personal-portfolio signle-section tmp-section-gapBottom">
      <div className="section-header pb--50">
        <h4 className="subtitle">
          <i className="fa-regular fa-user" /> About Me
        </h4>
        <h2 className="title tmp-title-split">
          Every great design begin with <br />
          an even <span>better story</span>
        </h2>
        <p className="about-desc">
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chopsone design problem at a
          time.
        </p>
      </div>
      <div className="single-progress large-size no-radius">
        <h6 className="title">Web Development</h6>
        <div className="progress">
          <div
            className="progress-bar wow fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay=".3s"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <span className="progress-number">90%</span>
        </div>
      </div>
      <div className="single-progress large-size no-radius">
        <h6 className="title">Photoshop Design</h6>
        <div className="progress">
          <div
            className="progress-bar wow fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay=".3s"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <span className="progress-number">75%</span>
        </div>
      </div>
      <div className="single-progress large-size no-radius">
        <h6 className="title">App Development</h6>
        <div className="progress">
          <div
            className="progress-bar wow fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay=".3s"
            role="progressbar"
            style={{ width: "95%" }}
            aria-valuenow={95}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <span className="progress-number">95%</span>
        </div>
      </div>
      <div className="single-progress large-size no-radius">
        <h6 className="title">Application Development</h6>
        <div className="progress">
          <div
            className="progress-bar wow fadeInLeft"
            role="progressbar"
            style={{ width: "45%" }}
            aria-valuenow={45}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <span className="progress-number">45%</span>
        </div>
      </div>
    </div>
  );
}
