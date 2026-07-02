import { AIService } from "../../services/ai.service";

const aiService = new AIService();

export async function reviewPRTool(args: {
    owner: string;
    repo: string;
    pullNumber: number;
}) {

    try {

        const review = await aiService.reviewPullRequest(
            args.owner,
            args.repo,
            args.pullNumber
        );

        return {
            content: [
                {
                    type: "text" as const,
                    text:
                        typeof review === "string"
                            ? review
                            : JSON.stringify(review, null, 2),
                },
            ],
        };

    } catch (error) {

        return {
            isError: true,
            content: [
                {
                    type: "text" as const,
                    text:
                        error instanceof Error
                            ? error.message
                            : "Unknown Error",
                },
            ],
        };

    }

}