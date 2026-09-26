import { TECH_STACK } from "../config/techStack";
import Section from "./Section";

const GROUPS: { label: string; names: string[] }[] = [
  { label: "Language", names: ["TypeScript", "JavaScript", "Python", "C++"] },
  { label: "Interface", names: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Server", names: ["Node.js", "Bun", "Hono JS", "Express.js"] },
  { label: "Data", names: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"] },
  { label: "Systems", names: ["Docker", "AWS", "NGINX", "Cloudflare"] },
];

export default function Stack() {
  const byTitle = new Map(TECH_STACK.map((item) => [item.title, item]));

  return (
    <Section id="tools" index="04" label="Tools">
      <dl className="max-w-[40rem] space-y-5">
        {GROUPS.map((group) => {
          const items = group.names
            .map((name) => byTitle.get(name))
            .filter((item) => item !== undefined);

          return (
            <div
              key={group.label}
              className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
            >
              <dt className="pt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {group.label}
              </dt>
              <dd className="text-[15px] leading-relaxed">
                {items.map((item, index) => (
                  <span key={item.title}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {item.title}
                    </a>
                    {index < items.length - 1 && (
                      <span className="text-muted-foreground"> · </span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
