import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import ProfilePic from "@/public/avatar-light.webp";
import ProfilePicDark from "@/public/avatar-dark.webp";
import { PERSONAL_INFO } from "../config/personInfo";
import { GITHUB_USERNAME, RESUME_PAGE } from "../config/info";

const CORNERS = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

const Hero = () => {
  const info = Object.fromEntries(PERSONAL_INFO.map((item) => [item.title, item]));
  const email = info["Email"]?.information;
  const schedule = info["Schedule a Meet"]?.href;

  return (
    <header>
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:px-6">
        <span>
          File <span className="text-foreground">AG-0001</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
          </span>
          Open to work
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr] border-b border-border">
        <div className="dots border-r border-border p-5 sm:p-7">
          <div className="relative p-2">
            {CORNERS.map((corner) => (
              <span
                key={corner}
                aria-hidden="true"
                className={`absolute size-3 border-signal ${corner}`}
              />
            ))}
            <div className="relative size-24 overflow-hidden rounded-full sm:size-36">
              <Image
                src={ProfilePic}
                alt="Ayush Goyal"
                fill
                priority
                placeholder="blur"
                sizes="144px"
                className="object-cover dark:hidden"
              />
              <Image
                src={ProfilePicDark}
                alt="Ayush Goyal"
                fill
                priority
                placeholder="blur"
                sizes="144px"
                className="hidden object-cover dark:block"
              />
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-end p-4 sm:p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Subject
          </p>
          <h1 className="mt-2 text-[2rem] font-semibold leading-none tracking-[-0.045em] sm:text-5xl">
            Ayush Goyal
          </h1>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            a.k.a. <span className="text-foreground">pydottsx</span>
          </p>
          <p className="mt-4 hidden text-[15px] text-muted-foreground sm:block">
            You&apos;ll find me struggling with{" "}
            <span className="line-through decoration-signal decoration-2">perfection</span>{" "}
            job hunt.
          </p>
        </div>
      </div>

      <p className="border-b border-border px-4 py-3 text-sm text-muted-foreground sm:hidden">
        You&apos;ll find me struggling with{" "}
        <span className="line-through decoration-signal decoration-2">perfection</span>{" "}
        job hunt.
      </p>

      <dl className="grid grid-cols-2 border-b border-border">
        <div className="border-b border-r border-border px-4 py-3.5 sm:px-6">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Role
          </dt>
          <dd className="mt-1 text-sm">Full stack &amp; DevOps</dd>
        </div>
        <div className="border-b border-border px-4 py-3.5 sm:px-6">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Location
          </dt>
          <dd className="mt-1 text-sm">{info["Location"]?.information}</dd>
        </div>
        <div className="border-r border-border px-4 py-3.5 sm:px-6">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Email
          </dt>
          <dd className="mt-1 truncate text-sm">
            <a
              href={`mailto:${email}`}
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-signal"
            >
              {email}
            </a>
          </dd>
        </div>
        <div className="px-4 py-3.5 sm:px-6">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Meeting
          </dt>
          <dd className="mt-1 text-sm">
            <a
              href={schedule}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-signal"
            >
              Book 30 min
            </a>
          </dd>
        </div>
      </dl>

      <div className="flex flex-wrap gap-2 px-4 py-4 sm:px-6">
        <a
          href={RESUME_PAGE}
          className="inline-flex h-9 items-center rounded-md bg-foreground px-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-85"
        >
          Resume
        </a>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:bg-muted"
        >
          <FaGithub className="size-3.5" aria-hidden="true" /> GitHub
        </a>
      </div>
    </header>
  );
};

export default Hero;
