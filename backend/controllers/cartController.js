import userModel from '../models/userModel.js'

// Add cart to user model
const addToCart = async(req, res) =>{
try {
    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData
    if (!cartData[req.body.itemId]) {
        cartData(req.body.itemId)=0;
    }
    else{
        cartData(req.body.itemId)+=1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true, message:"Cart added success."}) 
} catch (error) {
   console.log(error);
   res.json({success:false, message: "Error"}) 
}
}

// Remove cart from user model
const removeFromCart = async(req, res)=>{
try {
    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId]>0) {
        cartData[req.body.itemId]-=1;
    } else {
       await userModel.findByIdAndDelete(req.body.userId, {cartData}) 
       res.json({success:true, message:"Removed from cart successfuly."})
    }
} catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
}
}

// Fetch cart data from user Model
const getCart = async (req, res)=>{
try {
    let userData = await userModel.findById(req.body.userId)
let cartData = await userData.cartData
res.json({success:true, cartData})
} 
catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
}
}

export {addToCart, removeFromCart, getCart}