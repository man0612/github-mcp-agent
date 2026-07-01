import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

dotenv.config();

export const github = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});