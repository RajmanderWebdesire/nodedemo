import User from "../user.model.js";

// Save User
export const saveUser = async (req, res) => {
  try {
    const { username } = req.body;
    console.log("==== Username ====", username);
    const userData = await new User({ username }).save();

    console.log(">>>>>>>>>>>>>>>>>>>>", userData);
    return res.json({ msg: userData });
  } catch (err) {
    return res.json({ msg: err });
  }
};

// Get Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
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
