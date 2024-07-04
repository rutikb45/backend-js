import mongoose from "mongoose";
import { DB_NAME,DB_URL } from "../constant.js";

async function connectDb(){
    try {
      const connectionInstance =  await mongoose.connect(`${DB_URL}/${DB_NAME}`);
      console.log(`MongoDb connected ! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERR: ", error);
        throw error;
        process.exit(1);
    }
}

export default connectDb;