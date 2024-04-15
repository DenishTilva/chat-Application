import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("DataBase Connected");
    }).catch((error)=>{
        console.log("Error: ",error);
    })
}

export default connectDB;