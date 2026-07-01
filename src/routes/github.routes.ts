import { Router } from "express";
import {
    getAuthenticatedUser,
    getRepository,
    getPullRequests,
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

export default router;