import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
  product_quantity: Number,
  product_name: String,
  product_id:String, 
  
});
const Cart = mongoose.models.carts || mongoose.model("carts", CartSchema);
export default Cart;
