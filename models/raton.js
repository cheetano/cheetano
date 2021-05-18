import mongoose from "mongoose";

const RatonSchema = new mongoose.Schema({  
    _id:{type:Number},  
    name: {
       type: String 
    }
});

let RatonModel = (mongoose.models && mongoose.models["Raton"]) ||mongoose.model("Raton", RatonSchema);
export default RatonModel;