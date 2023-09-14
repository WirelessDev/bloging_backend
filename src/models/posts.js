import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postTitle :{
        type: String,
        required : true,
    },
    content :{
        type: String,
        required: true
    },

    Author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
})

const Posts = mongoose.model('Posts', postSchema)

export default Posts