import User from "../user.model.js";

// Save User
export const saveUser = async (req, res) => {
  try {
    const { username } = req.body;
    console.log("==== Username ====", username);
    const userData = await new User({ username }).save();

    console.log(">>>>>>>>>>>>>>>>>>>>", userData);
    return res.status(201).json({ msg: userData });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

// Get Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.table(users.map((user) => user.toObject()));
    return res.json({ msg: users });
  } catch (err) {
    return res.json({ msg: err });
  }
};

export const getDesign = (req, res) => {
  const age = req.query.age;
  console.log("getDesign");
  res.json({ msg: "getDesign " + age });
};

// Get users by findOne
export const getUserByFindOne = async (req, res) => {
  const username = req.query.username;
  //const user = await User.findOne({ username: username });
  const user = await User.findOne({
    username: new RegExp(`^${username}$`, "i"),
  });

  return res.status(200).json({ status: true, data: user });
};

// Get User By Id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById("68d68ade9b4d58e00132bbf3");
    return res.json({ msg: user });
  } catch (err) {
    return res.json({ msg: err });
  }
};

// update by findOneAndUpdate
export const updateUser = async (req, res) => {
  const { username, changename } = req.body;
  const user = await User.findOneAndUpdate(
    { username },
    { username: changename },
    { new: true }
  );
  return res.json({ msg: user });
};

export const findByIdAndUpdate = async (req, res) => {
  const id = req.params.id;
  const { changename } = req.body;
  const userData = await User.findByIdAndUpdate(
    id,
    { username: changename },
    { new: true }
  );
  res.status(200).json({ data: userData });
};

export const deleteUser = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOneAndDelete({ username }); //68d68ade9b4d58e00132bbf3
  return res.json({ msg: user });
};

export const findByIdDelete = async (req, res) => {
  const user = await User.findByIdAndDelete("68d7518e4480bd1dab42e34e");

  if (user !== null) {
    return res.status(200).json({ msg: "user deleted" });
  } else {
    return res.status(404).json({ msg: "user not found" });
  }
  //console.log("Type of = user ", typeof user, "user>>>", user);
};
