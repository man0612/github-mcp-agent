import { Request, Response } from "express";
import { AIService } from "../services/ai.service";
import { GithubService } from "../services/github.service";

const aiService = new AIService();
const githubService = new GithubService();

/**
 * Reviews an entire Pull Request
 */
export const reviewPullRequest = async (
    req: Request,
    res: Response
) => {

    try {
        const { owner, repo, pullNumber } = req.body;

        const review = await aiService.reviewPullRequest(
            owner,
            repo,
            pullNumber
        );

        res.json({
            review
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Review Failed"
        });

    }

};


/**
 * Generates a summary for the Pull Request
 */
export const summarizePullRequest = async (
    req: Request,
    res: Response
) => {

    try {

        const { owner, repo, pullNumber } = req.body;

        const summary = await aiService.summarizePullRequest(
            owner,
            repo,
            pullNumber
        );

        res.json({
            summary
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Summary Failed"
        });

    }

};