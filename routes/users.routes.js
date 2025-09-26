import express from "express";
//const app = express();

import {
  saveUser,
  getUsers,
  getUserById,
} from "../controllers/users.controller.js";

const router = express.Router();
// Done

router.post("/users", saveUser);
router.get("/users", getUsers);
router.get("/users/:id", getUsers);

export default router;
