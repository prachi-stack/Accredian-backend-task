import express from "express";
import cors from "cors";
import referralRoutes from "./routes/referralRoutes.js";

const app = express();

// Middleware
app.use(cors({ origin: "https://accredian-frontend-task-gamma-ashen.vercel.app/", methods: ["GET", "POST"], credentials: true }));
app.use(express.json());

// API Routes
app.use("/api/referral", referralRoutes);

export default app;
