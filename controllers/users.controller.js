export const getUsers = (req, res) => {
  res.json({ msg: "getUsers called hi 56" });
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
