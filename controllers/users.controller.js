import User from "../user.model.js";

export const saveUser = async (req, res) => {
  try {
    console.log("first");
    const userData = await new User({ username: "rajmander singh" }).save();

    console.log(">>>>>>>>>>>>>>>>>>>>", userData);
    return res.json({ msg: userData });
  } catch (err) {
    return res.json({ msg: err });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({ msg: users });
  } catch (err) {
    return res.json({ msg: err });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById("68d68ade9b4d58e00132bbf3");
    return res.json({ msg: user });
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
