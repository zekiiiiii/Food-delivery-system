import foodModel from "../models/foodModel.js";
import fs from "fs"

// Add food item
const addFood = async (req, res) => {
    try {
      console.log("Request body:", req.body);
      console.log("Request file:", req.file);
  
      const image_filename = req.file.filename || "default.jpg";
  
      const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
      });
  
      console.log("Food object to save:", food);
  
      await food.save();
      res.json({ success: true, message: "Food added successfully." });
    } catch (error) {
      console.error("Error saving food item:", error.message, error.stack);
      res.json({ success: false, message: "Food not added." });
    }
  };
  

// List food item
const listFood = async (req, res)=>{
try{
const foods = await foodModel.find({})
res.json({success:true, data:foods})
}
catch (error) {
    console.error("Error fetching food list:", error);
    res.json({ success: false, message: "Error! No list." });
  }
}

// Remove food item
const removeFood = async(req, res)=>{
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, ()=>{})
        
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Food removed."})
    } catch (error) {
        console.error("Error removing food item:", error);
        res.json({ success: false, message: "Error! Not removed." });
      }
}

export {addFood, listFood, removeFood} 