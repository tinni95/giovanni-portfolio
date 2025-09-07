import React from "react";
import Link from "next/link";
export default function Copyright() {
  return (
    <div className="copyright-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-wrapper">
              <p className="copy-right-para tmp-link-animation">
                ©
                  Diverse Agency {new Date().getFullYear()}
                  {" "}| All Rights Reserved
              </p>{" "}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
