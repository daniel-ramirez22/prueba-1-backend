import express from "express";
import { createNewUser, listUsers, loginUser} from "../controllers/user.controllers.js";
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('Test route');
});

//Rutas publicas
router.get('/get-users', listUsers);


router.post('/create-user', createNewUser);
router.post('/login',loginUser);
export default router;
