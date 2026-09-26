import Navbar from "./siteComponents/Navbar";
import Hero from "./siteComponents/Hero";
import Divider from "./siteComponents/Divider";
import About from "./siteComponents/About";
import Experience from "./siteComponents/Experience";
import { Project } from "./siteComponents/Projects";
import Stack from "./siteComponents/Stack";
import Achievements from "./siteComponents/Achievements";
import Stats from "./siteComponents/Stats";
import Socials from "./siteComponents/Socials";
import Footer from "./siteComponents/Footer";

export const revalidate = 3600;

const Page = () => {
  return (
    <>
      <Navbar />
      <main
        id="top"
        className="mx-auto w-full max-w-3xl border-border pt-14 sm:border-x"
      >
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Project />
        <Divider />
        <Stack />
        <Divider />
        <Achievements />
        <Divider />
        <Stats />
        <Divider />
        <Socials />
        <Footer />
      </main>
    </>
  );
};

export default Page;
