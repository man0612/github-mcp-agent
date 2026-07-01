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
        const owner = req.params.owner as string;
        const repo = req.params.repo as string;

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

export const getPullRequest = async (
    req: Request,
    res: Response
) => {

    try {

        const owner = req.params.owner as string;
        const repo = req.params.repo as string;
        const number= req.params.repo as string;

        const pr =
            await githubService.getPullRequest(
                owner,
                repo,
                Number(number)
            );

        res.json({
            title: pr.title,
            author: pr.user?.login,
            body: pr.body,
            state: pr.state,
            additions: pr.additions,
            deletions: pr.deletions,
            changedFiles: pr.changed_files,
            commits: pr.commits,
        });

    } catch (error) {

        res.status(500).json({
            message: "Unable to fetch pull request",
        });

    }

};

export const getPullRequestFiles = async (
    req: Request,
    res: Response
) => {

    try {

        const owner = req.params.owner as string;
        const repo = req.params.repo as string;
        const number= req.params.repo as string;

        const files =
            await githubService.getPullRequestFiles(
                owner,
                repo,
                Number(number)
            );

        res.json(
            files.map(file => ({
                filename: file.filename,
                status: file.status,
                additions: file.additions,
                deletions: file.deletions,
                changes: file.changes,
                patch: file.patch,
            }))
        );

    } catch (error) {

        res.status(500).json({
            message: "Unable to fetch changed files",
        });

    }

};