import GitHubGraphWithSuspense from "../Statistics/githubStats/GitStats";

const Stats = () => {
  return (
    <div className="activity max-w-full font-mono text-[11px] text-muted-foreground">
      <GitHubGraphWithSuspense />
    </div>
  );
};

export default Stats;
