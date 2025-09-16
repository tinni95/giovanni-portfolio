import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/common/Blogs";
import Brands from "@/components/common/Brands";
import Contact from "@/components/common/Contact2";
import Education from "@/components/common/Education2";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home/Hero";
import Portfolio from "@/components/common/Portfolio2";
import Services from "@/components/common/Services";
import Services2 from "@/components/common/Services3";
import Skills from "@/components/common/Skills";
import Skills2 from "@/components/common/Skills2";
import Testimonials from "@/components/homes/home/Testimonials";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Giovanni Damico - Senior Developer | Full Stack Developer Portfolio",
  description:
    "Giovanni Damico is a senior full stack developer with expertise in modern web technologies. Explore his portfolio showcasing innovative projects, technical skills, and professional experience in software development.",
};
export default function Home() {
  return (
    <>
      <div className="tmp-white-version">
        <Header1 />
        <Hero isLight />
        <Services isLight />
        <Facts />
        <Skills />
        <Services2 />
        <Education />
        <Brands />
        <Portfolio isLight />
        <Skills2 />
        <Testimonials />
        <Contact />
        <Blogs isLight />
        <Footer1 />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
