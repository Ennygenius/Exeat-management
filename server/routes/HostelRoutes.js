import express from "express";
import { createHostels, getAllHostels } from "../controllers/Hostel.js";

const router = express.Router();

router.get("/", getAllHostels).post("/", createHostels);

export default router;
