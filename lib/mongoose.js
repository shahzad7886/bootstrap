import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const MONGO_URI="mongodb+srv://asim-commerce:cqtkf9Q3g8XVsB3R@cluster0.tdd1tms.mongodb.net/"
    return mongoose.connect(MONGO_URI);
  }
}