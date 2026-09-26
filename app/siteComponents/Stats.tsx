import GitHubGraphWithSuspense from "../Statistics/githubStats/GitStats";
import { GITHUB_USERNAME } from "../config/info";
import Section from "./Section";

const Stats = () => {
  return (
    <Section
      id="activity"
      index="06"
      title="Activity log"
      meta={`github / ${GITHUB_USERNAME}`}
    >
      <div className="activity px-4 py-5 font-mono text-[11px] text-muted-foreground sm:px-6 sm:py-6">
        <GitHubGraphWithSuspense />
      </div>
    </Section>
  );
};

export default Stats;
