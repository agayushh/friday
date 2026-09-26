"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Activity } from "@/components/kibo-ui/contribution-graph";

interface GitHubGraphClientProps {
  data: Activity[];
}

const GitHubGraphClient = ({ data }: GitHubGraphClientProps) => {
  return (
    <TooltipProvider>
      <ContributionGraph
        data={data}
        blockRadius={2}
        fontSize={12}
        className="activity"
        labels={{
          totalCount: "{{count}} contributions in {{year}}",
          legend: { less: "Less", more: "More" },
        }}
      >
        <ContributionGraphCalendar>
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger asChild>
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    className="cursor-pointer"
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">{activity.date}</p>
                <p>{activity.count} contributions</p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter>
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
};

export default GitHubGraphClient;
