import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    await mongoose.connect(
      //"mongodb+srv://rajmanderdev_db_user:ucbH5TamNuHzQbFe@rajcluster.k52h8mf.mongodb.net/demoapp?retryWrites=true&w=majority"
      `mongodb+srv://${process.env.DB_USERNAME}:${DB_PASSWORD}@rajcluster.k52h8mf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    console.log("Connection success");
  } catch (err) {
    console.log("Error in db connection ", err);
  }
};
