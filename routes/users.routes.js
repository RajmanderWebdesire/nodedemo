import express from "express";
//const app = express();

import { getUsers } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users", getUsers);

export default router;
