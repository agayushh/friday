import { PERSONAL_INFO } from "../config/personInfo";
import { SOCIAL_LINKS } from "../config/socials";
import Section from "./Section";

function socialName(title: string) {
  if (title.startsWith("X")) return "X";
  if (title.toLowerCase().startsWith("blue")) return "Bluesky";
  return title;
}

const Socials = () => {
  const direct = PERSONAL_INFO.filter((item) => item.href).map((item) => ({
    title: item.title === "Schedule a Meet" ? "Schedule" : item.title,
    label: item.information,
    href: item.href!.startsWith("http") ? item.href! : `mailto:${item.information}`,
  }));

  const socials = SOCIAL_LINKS.map((social) => ({
    title: socialName(social.title),
    label: social.description,
    href: social.href,
  }));

  const contacts = [...direct, ...socials];

  return (
    <Section id="contact" index="06" label="Contact">
      <ul className="max-w-[48rem]">
        {contacts.map((contact) => {
          const external = contact.href.startsWith("http");
          return (
            <li key={contact.title} className="border-b border-border last:border-b-0">
              <a
                href={contact.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-baseline justify-between gap-6 py-4"
              >
                <span className="font-serif text-xl tracking-[-0.02em] transition-colors group-hover:text-ink">
                  {contact.title}
                </span>
                <span className="truncate text-right font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:text-ink">
                  {contact.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Socials;
