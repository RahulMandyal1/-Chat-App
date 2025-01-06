import express from "express";
import { findUser } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", findUser);

export default router;
