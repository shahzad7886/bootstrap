import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const MONGO_URI="mongodb+srv://ha7011555:PbUZeKb7Idj6G0AD@cluster0.wlkchy4.mongodb.net/"
    return mongoose.connect(MONGO_URI);
  }
}