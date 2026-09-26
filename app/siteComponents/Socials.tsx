import type { IconType } from "react-icons";
import { FaBluesky, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiCalendar, FiMail } from "react-icons/fi";
import { PERSONAL_INFO } from "../config/personInfo";
import { SOCIAL_LINKS } from "../config/socials";
import Section from "./Section";

const SOCIAL_ICONS: Record<string, IconType> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  "X (Formerly Twitter)": FaXTwitter,
  BlueSky: FaBluesky,
};

type Channel = { label: string; value: string; href: string; icon: IconType };

const Socials = () => {
  const email = PERSONAL_INFO.find((item) => item.title === "Email");
  const meet = PERSONAL_INFO.find((item) => item.title === "Schedule a Meet");

  const channels: Channel[] = [
    ...(email
      ? [{ label: "Email", value: email.information, href: `mailto:${email.information}`, icon: FiMail }]
      : []),
    ...(meet?.href
      ? [{ label: "Meeting", value: "calendly / 30min", href: meet.href, icon: FiCalendar }]
      : []),
    ...SOCIAL_LINKS.map((social) => ({
      label: social.title.startsWith("X") ? "X" : social.title,
      value: social.description ?? social.href,
      href: social.href,
      icon: SOCIAL_ICONS[social.title] ?? FiArrowUpRight,
    })),
  ];

  return (
    <Section id="contact" index="07" title="Channels" meta="Line open">
      <div className="overflow-hidden">
        <ul className="-mb-px grid sm:-mr-px sm:grid-cols-2">
          {channels.map(({ label, value, href, icon: Icon }) => {
            const external = href.startsWith("http");
            return (
              <li key={label} className="border-b border-border sm:border-r">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3.5 px-4 py-4 transition-colors hover:bg-muted/60 sm:px-6"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-signal"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm">{value}</span>
                  </span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Socials;
