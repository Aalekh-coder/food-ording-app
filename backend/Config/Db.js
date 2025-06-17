import { connect } from "mongoose";
import { DB_URL } from "./env.js";

const connectToDB = async () => {
  try {
    await connect(DB_URL, { dbName: "food-order-backend" });
    console.log(`Connected to DB in NODE_ENV mode`);
  } catch (error) {
    console.error("Error connecting to DB:", error);
    process.exit(1);
  }
};

export default connectToDB