import mongoose from "mongoose";

export async function connection(){
    const db = await mongoose.connect(process.env.MONGODB_URI);
    return db;
}