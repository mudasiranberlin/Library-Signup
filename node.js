
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})
import {uploadCloudinary} from "./src/utils/cloudinary.js"

const avatar = await uploadCloudinary("mudasir")

console.log("Mudasir");

console.log(process.env.PORT);

console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_API_SECRET);


