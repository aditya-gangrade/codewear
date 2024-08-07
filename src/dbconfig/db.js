import mongoose from "mongoose";
const dbconnection = async ()=>{
    try {

        await mongoose.connect('mongodb://localhost:27017/codewear')
        console.log("connected")
    }
    catch(error){
        console.log(error)
    }
}
export default dbconnection; 