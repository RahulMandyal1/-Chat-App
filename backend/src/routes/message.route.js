import express from "express";

const router = express.Router();

router.get("/list", (req, res) => {
  res.json({ message: "this will return list of messages later" });
});

export default router;
