import express from "express";
import {
  createNewUser,
  listUsers,
  loginUser,
  deleteUserById,
  updateUserById,
} from "../controllers/user.controllers.js";
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Test route");
});

//Rutas publicas
router.get("/get-users", listUsers);

router.post("/create-user", createNewUser);
router.post("/login", loginUser);
router.delete("/delete-user/:email", deleteUserById);
router.put("/update-user/:email", updateUserById);

export default router;
