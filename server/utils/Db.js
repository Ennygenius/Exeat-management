import mongoose from "mongoose";

const MONGO_URI = "mongodb://0.0.0.0:27017/Exeat";

const connectDb = async () => {
  const connect = await mongoose.connect(MONGO_URI);
  console.log(`Mongodb connected successfully`);
};

export default connectDb;
