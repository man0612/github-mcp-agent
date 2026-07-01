import { Router } from "express";
import {
    getAuthenticatedUser,
    getRepository,
    getPullRequests,
    getPullRequest,
    getPullRequestFiles
} from "../controllers/github.controller";

const router = Router();

router.get(
    "/me",
    getAuthenticatedUser
);

router.get(
    "/repo/:owner/:repo",
    getRepository
);

router.get(
    "/pulls/:owner/:repo",
    getPullRequests
);

router.get(
    "/pull/:owner/:repo/:number",
    getPullRequest
);

router.get(
    "/pull/:owner/:repo/:number/files",
    getPullRequestFiles
);

export default router;