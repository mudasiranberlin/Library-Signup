import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Application Connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1)        
    }
}
export default connectDB



/*
const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error
        
    }
}
    */