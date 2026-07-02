import { github } from "../config/github";

console.log("GitHub client:", github);

export class GithubService {

    async getAuthenticatedUser() {
        const response = await github.users.getAuthenticated();

        return response.data;
    }

    async getRepository(owner: string, repo: string) {
        const response = await github.repos.get({
            owner,
            repo,
        });
    
        return response.data;
    }

    async getPullRequests(owner: string, repo: string) {
        const response = await github.pulls.list({
            owner,
            repo,
            state: "open",
        });
    
        return response.data;
    }

    async getPullRequest(
        owner: string,
        repo: string,
        pull_number: number
    ) {
        const response = await github.pulls.get({
            owner,
            repo,
            pull_number,
        });
    
        return response.data;
    }

    async getPullRequestFiles(
        owner: string,
        repo: string,
        pull_number: number
    ) {
    
        const response =
            await github.pulls.listFiles({
                owner,
                repo,
                pull_number,
            });
    
        return response.data;
    
    }

    async createReviewComment(
        owner: string,
        repo: string,
        pullNumber: number,
        body: string
    ) {
        console.log("GitHub object:", github);

        const response = await github.pulls.createReview({
            owner,
            repo,
            pull_number: pullNumber,
            event: "COMMENT",
            body,
        });
    
        return response.data;
    
    }

}
