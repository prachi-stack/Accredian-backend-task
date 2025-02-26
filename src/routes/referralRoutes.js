import express from "express";
import { submitReferral } from "../controllers/referralController.js";

const router = express.Router();

// POST /api/referral - Handle referral submission
router.post("/", submitReferral);

export default router;
