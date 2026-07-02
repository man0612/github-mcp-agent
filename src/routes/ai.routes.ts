import { Router } from "express";
import { reviewPullRequest,summarizePullRequest } from "../controllers/ai.controller";

const router = Router();

router.post(
    "/review-pr",
    reviewPullRequest
);

router.post(
    "/summarize-pr",
    summarizePullRequest
);

export default router;