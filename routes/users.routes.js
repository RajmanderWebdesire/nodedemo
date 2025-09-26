import express from "express";
//const app = express();

import { saveUser, getUsers } from "../controllers/users.controller.js";

const router = express.Router();
// Done

router.post("/users", saveUser);
router.get("/users", getUsers);

export default router;
