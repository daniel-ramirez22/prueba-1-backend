import express from "express";
import { listUsers } from "../controllers/user.controllers.js";
const router = express.Router();

router.get("/get-users", (req, res) => {
  res.send([]);
});

router.get("/get-users", listUsers);

export default router;
