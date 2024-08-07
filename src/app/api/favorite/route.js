// pages/api/favorite.js
import dbconnection from "@/dbconfig/db";
import Favorite from "@/models/Favorite";

export async function POST(req) {
  try {
    await dbconnection();
    const { productId } = await req.json(); // Use 'productId' instead of 'message'
    
    if (!productId) {
      return new Response(
        JSON.stringify({ message: "Product ID is required" }),
        { status: 400 }
      );
    }

    // Add to favorites logic
    const favorite = new Favorite({ product: productId });
    await favorite.save();

    return new Response(
      JSON.stringify({ message: "Added to Favorites" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding to favorites:", error);
    return new Response(
      JSON.stringify({ message: "Error adding to favorites" }),
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await dbconnection();
    const { productId } = await req.json();

    if (!productId) {
      return new Response(
        JSON.stringify({ message: "Product ID is required" }),
        { status: 400 }
      );
    }

    // Remove from favorites logic
    await Favorite.deleteOne({ product: productId });

    return new Response(
      JSON.stringify({ message: "Removed from Favorites" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing from favorites:", error);
    return new Response(
      JSON.stringify({ message: "Error removing from favorites" }),
      { status: 500 }
    );
  }
}
