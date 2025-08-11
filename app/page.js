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
import ThemeWrapper from "@/components/common/ThemeWrapper";
import ThemeAwareWrapper from "@/components/common/ThemeAwareWrapper";

export const metadata = {
  title:
    "Home 01 || Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
  description:
    "Reeni is a modern personal portfolio template for designers, developers, content writer, cleaner, programmer, fashion designer, model, Influencer and freelancers. Fully responsive, SEO-friendly, Bootstrap and easy to customize.",
};
export default function Home() {
  return (
    <ThemeWrapper>
      <Header1 />
      <Hero />
      <div style={{  height: "72px" }}>
      </div>
      <ThemeAwareWrapper>
        <Facts />
        <Skills />
        <Education />
        <Brands />
        <Portfolio />
      </ThemeAwareWrapper>
      <div style={{  height: "72px" }}>
      </div>
      <Footer1 />
      <Copyright />
      <CommonComponents />
    </ThemeWrapper>
  );
}
