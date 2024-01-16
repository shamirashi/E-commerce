import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : {
        type: String,
        required : true ,
        unique : true
    },
    price : {
        type: String ,
        required : true
    },
    quantity: {
        type: Number, 
    },
    image : {
        type : Object,
    },
    category : {
        type : String,
    }
});

export default mongoose.model.Products || mongoose.model("Product", schema);
