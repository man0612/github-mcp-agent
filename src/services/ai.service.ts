import { model } from "../config/gemini";
import { reviewPrompt } from "../prompts/review.prompt";
import { summaryPrompt } from "../prompts/summary.prompt";
import { GithubService } from "./github.service";

export class AIService {

    private githubService = new GithubService();

    private buildDiff(files: any[]) {

        let completeDiff = "";

        for (const file of files) {

            if (!file.patch) continue;

            completeDiff += `
====================================
FILE: ${file.filename}
====================================

${file.patch}

`;
        }

        return completeDiff;
    }

    async reviewPullRequest(
        owner: string,
        repo: string,
        pullNumber: number
    ) {

        const files =
            await this.githubService.getPullRequestFiles(
                owner,
                repo,
                pullNumber
            );

        const diff = this.buildDiff(files);

        const prompt = reviewPrompt(diff);

        const result =
            await model.generateContent(prompt);

        return result.response.text();
    }

    async summarizePullRequest(
        owner: string,
        repo: string,
        pullNumber: number
    ) {

        const files =
            await this.githubService.getPullRequestFiles(
                owner,
                repo,
                pullNumber
            );

        const diff = this.buildDiff(files);

        const prompt = summaryPrompt(diff);

        const result =
            await model.generateContent(prompt);

        return result.response.text();
    }
}