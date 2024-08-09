// src/app/api/favorite/route.js
import dbconnection from "@/dbconfig/db";
import Favorite from "@/models/Favorite";

export async function POST(req) {
  try {
    await dbconnection();
    const { imageUrl, category, title, price } = await req.json(); // Ensure req.json() is awaited properly

    if (!imageUrl || !category || !title || !price) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }
    const favorite = new Favorite({ imageUrl, category, title, price });
    await favorite.save();

    return new Response(JSON.stringify({ message: "Added to Favorites" }), {
      status: 200,
    });
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

    await Favorite.deleteOne({ _id: productId });

    return new Response(JSON.stringify({ message: "Removed from Favorites" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error removing from favorites:", error);
    return new Response(
      JSON.stringify({ message: "Error removing from favorites" }),
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await dbconnection();
    const favorites = await Favorite.find({});

    return new Response(JSON.stringify({ favorites }), { status: 200 });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching favorites" }),
      { status: 500 }
    );
  }
}
