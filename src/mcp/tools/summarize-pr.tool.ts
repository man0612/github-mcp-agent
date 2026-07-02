import { AIService } from "../../services/ai.service";

const aiService = new AIService();

export async function summarizePRTool(args: {
  owner: string;
  repo: string;
  pullNumber: number;
}) {
  const summary = await aiService.summarizePullRequest(
    args.owner,
    args.repo,
    args.pullNumber
  );

  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(summary, null, 2),
      },
    ],
  };
}