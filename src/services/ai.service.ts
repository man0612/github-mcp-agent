import { model } from "../config/gemini";
import { GithubService } from "./github.service";

import { reviewPrompt } from "../prompts/review.prompt";
import { summaryPrompt } from "../prompts/summary.prompt";
import { securityPrompt } from "../prompts/security.prompt";

export class AIService {

    private githubService = new GithubService();

    /**
     * Build one diff from all changed files
     */
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

    /**
     * Common AI function used by every AI tool
     */
    private async generateAIResponse(
        owner: string,
        repo: string,
        pullNumber: number,
        promptBuilder: (diff: string) => string
    ) {

        console.log("📥 Fetching Pull Request Files...");

        const files =
            await this.githubService.getPullRequestFiles(
                owner,
                repo,
                pullNumber
            );

        console.log(`✅ ${files.length} files fetched`);

        const diff = this.buildDiff(files);

        console.log(`📄 Diff Size : ${diff.length}`);

        // Prevent huge prompts
        const trimmedDiff = diff.substring(0, 6000);

        const prompt = promptBuilder(trimmedDiff);

        console.log("🤖 Calling Gemini...");

        const result =
            await model.generateContent(prompt);

        console.log("✅ Gemini Response Received");

        return result.response.text();
    }

    /**
     * AI Code Review
     */
    async reviewPullRequest(
        owner: string,
        repo: string,
        pullNumber: number
    ) {

        return this.generateAIResponse(
            owner,
            repo,
            pullNumber,
            reviewPrompt
        );

    }

    /**
     * AI Summary
     */
    async summarizePullRequest(
        owner: string,
        repo: string,
        pullNumber: number
    ) {

        return this.generateAIResponse(
            owner,
            repo,
            pullNumber,
            summaryPrompt
        );

    }

    /**
     * AI Security Review
     */
    async securityReview(
        owner: string,
        repo: string,
        pullNumber: number
    ) {

        return this.generateAIResponse(
            owner,
            repo,
            pullNumber,
            securityPrompt
        );

    }

    async reviewAndComment(
        owner: string,
        repo: string,
        pullNumber: number
    ) {
        try {
            const review = await this.reviewPullRequest(
                owner,
                repo,
                pullNumber
            );
    
            await this.githubService.createReviewComment(
                owner,
                repo,
                pullNumber,
                review
            );
    
            return "✅ AI review successfully posted to GitHub.";
    
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}