import { AIService } from "../../services/ai.service";

const aiService = new AIService();

export async function reviewCommentTool(args: {
  owner: string;
  repo: string;
  pullNumber: number;
}) {
  try {
    const result = await aiService.reviewAndComment(
      args.owner,
      args.repo,
      args.pullNumber
    );

    return {
      content: [
        {
          type: "text" as const,
          text: result,
        },
      ],
    };
  } catch (error) {
    console.error(error);

    return {
      isError: true,
      content: [
        {
          type: "text" as const,
          text:
            error instanceof Error
              ? error.stack ?? error.message
              : String(error),
        },
      ],
    };
  }
}