import mongoose from "mongoose";
const FavoriteSchema = new mongoose.Schema({
    product:String,
})
const Favorite = mongoose.models.favorites || mongoose.model('favorites',FavoriteSchema); 
export default Favorite; 