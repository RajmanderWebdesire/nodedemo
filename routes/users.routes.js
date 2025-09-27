import express from "express";
//const app = express();

import {
  saveUser,
  getUsers,
  getUserById,
  getUserByFindOne,
  getDesign,
  updateUser,
  deleteUser,
  findByIdDelete,
  findByIdAndUpdate,
  countUsers,
} from "../controllers/users.controller.js";

const router = express.Router();
// Done

//router.post("/users", saveUser);
router.get("/users", getUsers);
// router.get("/users/:id", getUserById);
// router.get("/users/app/design", getDesign);
// router.get("/users/name/search", getUserByFindOne);
// router.put("/users", updateUser);
// router.delete("/users", deleteUser);
// router.delete("/users/byid", findByIdDelete);
// router.put("/users/updating/:id", findByIdAndUpdate);
router.get("/users/counting/data", countUsers);

export default router;
