import Image from "next/image";
import ProfilePic from "@/public/avatar-light.webp";
import ProfilePicDark from "@/public/avatar-dark.webp";
import { PERSONAL_INFO } from "../config/personInfo";
import { RESUME_URL } from "../config/info";

const Hero = () => {
  const location = PERSONAL_INFO.find((item) => item.title === "Location");
  const domain = PERSONAL_INFO.find((item) => item.title === "Domain");
  const email = PERSONAL_INFO.find((item) => item.title === "Email");
  const schedule = PERSONAL_INFO.find((item) => item.title === "Schedule a Meet");

  return (
    <header className="pb-16 pt-24 sm:pb-20 sm:pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {domain?.information}
        <span className="mx-2.5 text-muted-foreground/50" aria-hidden="true">
          ·
        </span>
        {location?.information}
      </p>

      <div className="mt-6 flex items-end justify-between gap-6">
        <h1 className="rise font-serif text-[clamp(3.5rem,11vw,6.4rem)] leading-[0.88] tracking-[-0.035em] text-foreground">
          Ayush
          <br />
          Goyal
        </h1>
        <div className="relative mb-1 h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-foreground/15 sm:mb-2 sm:h-28 sm:w-28">
          <Image
            src={ProfilePic}
            alt="Portrait of Ayush Goyal"
            className="object-cover dark:hidden"
            fill
            priority
            sizes="112px"
          />
          <Image
            src={ProfilePicDark}
            alt="Portrait of Ayush Goyal"
            className="hidden object-cover dark:block"
            fill
            priority
            sizes="112px"
          />
        </div>
      </div>

      <p className="mt-10 max-w-[38rem] text-[17px] leading-[1.7] text-foreground sm:text-lg">
        I build full-stack software and the systems around it. The work I like
        stays understandable a year later — quiet, precise, and still standing.
      </p>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em]">
        {email?.href && (
          <a className="link" href={`mailto:${email.information}`}>
            Email
          </a>
        )}
        {schedule?.href && (
          <a
            className="link"
            href={schedule.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule
          </a>
        )}
        <a
          className="link"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a className="link" href="#contact">
          Contact
        </a>
      </div>

      <p className="mt-10 font-serif text-[15px] italic text-muted-foreground">
        — still negotiating with perfection
      </p>
    </header>
  );
};

export default Hero;
