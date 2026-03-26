import mongoose from "mongoose";
import envConfig from "./dotenv.js";

const db = async () =>{
    try {
        await mongoose.connect(envConfig.MONGODB_URL)
         console.log("Mongoose Connected Successfully!");
        
    } catch (error) {
        console.log("Mongoose Connected error!");
        console.log(error.message);
        
    }
};

export default db;