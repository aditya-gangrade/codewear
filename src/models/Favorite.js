import mongoose from "mongoose";
const FavoriteSchema = new mongoose.Schema({
    imageUrl : String,
    category:String,
    title:String,
    price : Number,
})
const Favorite = mongoose.models.favorites || mongoose.model('favorites',FavoriteSchema); 
export default Favorite; 