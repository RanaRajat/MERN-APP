import mongoose from "mongoose";

const connectDb = async() => {
  try{
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MOngoDb connected: ${connect.connection.host}`);
  }
  catch(e){
    console.log(`error : ${e.message}`);
    process.exit(1);
  }
}

export default connectDb
