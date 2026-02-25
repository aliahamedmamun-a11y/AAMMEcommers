import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  stock: Number,
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);
