import mongoose from "mongoose";
import { DB_NAME } from "../constant";
import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/
        ${DB_NAME}`)
        console.log(`MongoDB connected !! `);

    } catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB