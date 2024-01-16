import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username : {
        type: String,
        required : true ,
        unique : true
    },
    password : {
        type: String ,
        required : true
    },
    email: {
        type: String, 
    },
    PhoneNumber : {
        type : Number,
    },
    select : {
        type : String,
    },
    profile : {
        type : Object,
    }
});

export default mongoose.model.Shops || mongoose.model("Shop", schema);
