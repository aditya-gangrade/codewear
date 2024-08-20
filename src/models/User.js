import mongoose, { mongo } from "mongoose";
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require : [true, "name is required"]
    },
    email:{
        type: String,
        require :[true, "email is required"],
        unique : true
    },
    password:{
        type: String,
        require:[true, "Password is required"]
    },
    isVerified:{
        type : Boolean, //mongo data base db -> models -> documents(Schema) 
        default : false
    },
    verifyToken:{
        type : String,
        default : null
    }
})
const User = mongoose.models.users || mongoose.model('users',UserSchema); 
export default User; 