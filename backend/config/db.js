import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://meseretzekariyas29:1234zm1234@cluster0.u64rh.mongodb.net/food-del').then( ()=> console.log("DB connected"));
}