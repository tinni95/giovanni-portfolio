import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Brands from "@/components/common/Brands";
import Education from "@/components/common/Education2";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home/Hero";
import Portfolio from "@/components/common/Portfolio2";
import Skills from "@/components/common/Skills";
import CommonComponents from "@/components/common/CommonComponents";
import ThemeAwareWrapper from "@/components/common/ThemeAwareWrapper";
import Footer2 from "@/components/footers/Footer2";
import Footer3 from "@/components/footers/Footer3";

export const metadata = {
  title:
    "Giovanni Damico - Senior Developer | Full Stack Developer Portfolio",
  description:
    "Giovanni Damico is a senior full stack developer with expertise in modern web technologies. Explore his portfolio showcasing innovative projects, technical skills, and professional experience in software development.",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <ThemeAwareWrapper>
        <Hero />
      </ThemeAwareWrapper>
      <div style={{  height: "72px" }}>
      </div>
      <ThemeAwareWrapper>
        <Facts />
        <Skills />
        <Education />
        <Portfolio />
      </ThemeAwareWrapper>
      <div style={{  height: "72px" }}>
      </div>
      <Footer3 />
      <Copyright />
      <CommonComponents />
    </>
  );
}
