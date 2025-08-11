"use client";

import { openDemoModal } from "@/utlis/toggleDemoModal";

export default function DemoToggler() {
  return (
    <div className="demo-button-wrapper">
      <div className="buy-theme">
        <a target="_blank" href="https://themeforest.net/item/reeni-personal-portfolio-cv-resume-react-nextjs-template/58144525">
          <div className="theme-wrapper">
            <div>
              <svg
                width={22}
                height={22}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9854 19.9999C11.479 19.9999 11.8791 19.5998 11.8791 19.1063C11.8791 18.6127 11.479 18.2126 10.9854 18.2126C10.4919 18.2126 10.0918 18.6127 10.0918 19.1063C10.0918 19.5998 10.4919 19.9999 10.9854 19.9999Z"
                  fill="white"
                />
                <path
                  d="M16.1233 13.0134L11.0833 13.5539C10.9895 13.5633 10.9427 13.4477 11.0177 13.3883L15.9483 9.54819C16.267 9.28572 16.4732 8.87952 16.3857 8.44208C16.2983 7.77341 15.7452 7.33597 15.0453 7.42346L9.68658 8.20773C9.59284 8.22023 9.54285 8.1015 9.61784 8.04213L14.9297 3.98639C15.9764 3.17087 16.0639 1.57107 15.1047 0.639933C14.2329 -0.231832 12.8331 -0.203711 11.9613 0.668055L3.403 9.37634C3.08429 9.72629 2.93743 10.1919 3.02492 10.6855C3.17178 11.4729 3.95605 11.9948 4.74345 11.851L9.3585 10.9105C9.45849 10.8886 9.5116 11.023 9.42724 11.0792L4.30913 14.357C3.66859 14.7632 3.378 15.4912 3.5811 16.2192C3.7842 17.1785 4.74658 17.7315 5.67771 17.5003L13.3299 15.6162C13.4174 15.5943 13.4799 15.6943 13.4236 15.763L12.23 17.2378C11.9113 17.644 12.4331 18.1971 12.8706 17.8784L16.8013 14.6475C17.5012 14.0664 17.0357 12.929 16.1326 13.0165L16.1233 13.0134Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="all-demo show-demo" onClick={openDemoModal}>
        <div className="demos">
          <div className="theme-wrapper">
            <div>44 Pre-built sites</div>
          </div>
        </div>
      </div>
    </div>
  );
}
