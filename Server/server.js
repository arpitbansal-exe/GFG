import mongoose from 'mongoose';
import app from './app.js';
import dotenv from 'dotenv';
import e from 'express';
dotenv.config();

mongoose.connect(process.env.MONGODB_URL ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDb Database connected...");
});


const server=app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});
