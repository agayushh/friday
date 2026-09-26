// Remove "use client" - make this a Server Component
import { getGitHubContributions } from "./github-contributions";
import GitHubGraphClient from "./GithubStats";
import { Suspense } from "react";

const GitHubGraph = async () => {
  const data = await getGitHubContributions();

  if (data.length === 0) {
    return <p className="uppercase tracking-[0.16em]">Signal lost — contributions unavailable</p>;
  }

  return <GitHubGraphClient data={data} />;
};

// Wrap with Suspense for loading state
const GitHubGraphWithSuspense = () => {
  return (
    <Suspense
      fallback={<p className="uppercase tracking-[0.16em]">Retrieving activity…</p>}
    >
      <GitHubGraph />
    </Suspense>
  );
};

export default GitHubGraphWithSuspense;

//this is my implementation
// import { getGitHubContributions } from "./github-contributions";
// import GitHubGraphClient from "./GithubStats";
// import { Suspense } from "react";

// export default async function GitHubGraphWithSuspense() {
//   const data = await getGitHubContributions();
//   return (
//     <Suspense fallback={<div>Loading.....</div>}>
//       <GitHubGraphClient data={data} />
//     </Suspense>
//   );
// }
