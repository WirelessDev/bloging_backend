import User from "../models/user.js";
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) =>{
    try{
        const {username, email, password} = req.body;

        const userExist = await User.findOne({email})
        if(userExist){
            res.status(500).send({status: false, message: "user is exist"})
        }
        
        const hashpassword = await bcrypt.hash(password, 10)
        const user = new User({
            username,
            email,
            password : hashpassword
        })
        user.save();

        res.status(201).send({status: true, message:{username: user.username, email: user.email}})
    }catch(err){
        res.status(500).send({status: false, message: "unknow"})
    }
}

