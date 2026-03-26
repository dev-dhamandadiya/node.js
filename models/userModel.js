import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
     image: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum : ['user'],
        default : 'user'
    },
    
}, { timestamps: true });

const userModel = mongoose.model("userTbl", userSchema);

export default userModel;
