import mongoose from "mongoose";
import {db_url} from './Config.js'


const connectDB = async() =>{
    try{

        await mongoose.connect(db_url, 
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log("connected to db ✔")

    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
};

export default connectDB;