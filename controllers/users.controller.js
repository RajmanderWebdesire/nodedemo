import User from "../user.model.js";

export const getUsers = async (req, res) => {
  try {
    console.log("first");
    const userData = await new User({ username: "rajmander singh" }).save();

    console.log(">>>>>>>>>>>>>>>>>>>>", userData);
    return res.json({ msg: userData });
  } catch (err) {
    return res.json({ msg: err });
  }
};

// router.get("/users", (req, res) => {
//   res.json({ msg: "all users" });
// });

// router.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   res.json({ msg: id });
// });

// router.put("/users/:id", (req, res) => {
//   res.json({ msg: req.params.id });
// });

// router.delete("/users/:id", (req, res) => {
//   res.json({ msg: req.params.id });
// });

// app.post("/users", (req, res) => {
//   res.json({ msg: "post method save" });
// });
