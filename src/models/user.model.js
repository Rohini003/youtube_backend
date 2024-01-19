import mongoose,{Schema, SchemaTypes} from "mongoose";

const userSchema = new Schema({
    username :{
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    email :{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    fullname :{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage:{
        type:true,
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password :{
        type: String,
        required: [true,'Password is required'],
    },

    refreshToken:{
        type:String
    }},

    {
        timestamps:true,
    },
)

export const User = mongoose.model("user",userSchema)