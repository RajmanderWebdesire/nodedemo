import express from "express";
//const app = express();

import { saveUser } from "../controllers/users.controller.js";

const router = express.Router();
// Done

router.get("/users", saveUser);

export default router;
