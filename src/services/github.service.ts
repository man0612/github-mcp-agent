import { github } from "../config/github";

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

}
