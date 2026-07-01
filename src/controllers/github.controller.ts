import { Request, Response } from "express";
import { GithubService } from "../services/github.service";

const githubService = new GithubService();

export const getAuthenticatedUser = async (
    req: Request,
    res: Response
) => {

    try {

        const user = await githubService.getAuthenticatedUser();

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: "Unable to fetch user"
        });

    }

};

export const getRepository = async (
    req: Request,
    res: Response
) => {
    try {

        const owner = req.params.owner as string;
        const repo = req.params.repo as string;

        const repository =
            await githubService.getRepository(owner, repo);

            res.json({
                name: repository.name,
                fullName: repository.full_name,
                description: repository.description,
                language: repository.language,
                stars: repository.stargazers_count,
                forks: repository.forks_count,
                openIssues: repository.open_issues_count,
                defaultBranch: repository.default_branch,
            });

    } catch (error) {

        res.status(500).json({
            message: "Repository not found"
        });

    }
};

export const getPullRequests = async (
    req: Request,
    res: Response
) => {
    try {
        const { owner, repo } = req.params;

        const pulls = await githubService.getPullRequests(owner, repo);

        const result = pulls.map(pr => ({
            number: pr.number,
            title: pr.title,
            author: pr.user?.login,
            state: pr.state,
            createdAt: pr.created_at,
            url: pr.html_url,
        }));

        res.json(result);

    } catch (error) {

        res.status(500).json({
            message: "Unable to fetch pull requests",
        });

    }
};