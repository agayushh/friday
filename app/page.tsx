import Navbar from "./siteComponents/Navbar";
import Hero from "./siteComponents/Hero";
import About from "./siteComponents/About";
import Experience from "./siteComponents/Experience";
import { Project } from "./siteComponents/Projects";
import Stack from "./siteComponents/Stack";
import Achievements from "./siteComponents/Achievements";
import Socials from "./siteComponents/Socials";
import Footer from "./siteComponents/Footer";

export const revalidate = 3600;

const Page = () => {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />
      <div
        id="content"
        className="mx-auto w-full max-w-[1040px] px-5 sm:px-8 lg:px-10"
      >
        <Hero />
        <About />
        <Experience />
        <Project />
        <Stack />
        <Achievements />
        <Socials />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
