import { processReferral } from "../services/referralService.js";

export const submitReferral = async (req, res) => {
  try {
    console.log("Received Referral Data:", req.body);
    const response = await processReferral(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};
