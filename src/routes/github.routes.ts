import { Router } from "express";
import {
    getAuthenticatedUser,
    getRepository
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

export default router;