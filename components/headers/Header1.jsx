"use client";
import React from "react";
import Nav1 from "./Nav1";
import Image from "next/image";
import Link from "next/link";
import { openSidebar } from "@/utlis/toggleSidebar";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useTheme } from "@/components/context/ThemeContext";
export default function Header1({
  darkLogo = "/assets/images/logo/logo.png",
  lightLogo = "/assets/images/logo/logo.png",
}) {
  const { isLightMode } = useTheme();
  
  return (
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              <div className="logo">
                <Link href={`/`} className="d-flex align-items-center">
                  <Image
                    className="logo-dark"
                    alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                    src={darkLogo}
                    width={40}
                    height={40}
                    style={{ 
                      filter: isLightMode ? 'none' : 'invert(1)',
                      transition: 'filter 0.3s ease'
                    }}
                  />
                  <Image
                    className="logo-white"
                    alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                    src={lightLogo}
                    width={40}
                    height={40}
                    style={{ 
                      filter: isLightMode ? 'none' : 'invert(1)',
                      transition: 'filter 0.3s ease'
                    }}
                  />
                  <span className="logo-text ms-4 fw-bold" style={{ fontSize: '2.5rem' }}>Diverse Agency</span>
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav1 />
              </nav>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
                  <div className="social-link">
                    <a href="https://www.linkedin.com/in/gdamico241095/">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <div className="social-link">
                      <ThemeToggle className="theme-toggle-header d-none d-md-block" />
                    </div>
                  </div>
                </div>
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      className="tmp-menu-bars tmp_button_active"
                      onClick={openSidebar}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="tmp-menu-bars humberger_menu_active"
                      onClick={openMobilemenu}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
