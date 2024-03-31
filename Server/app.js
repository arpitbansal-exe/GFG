import express from 'express';
import authRoutes from "./routes/authroutes.js";
import postRoutes from "./routes/postroutes.js";
import errorHandler from './middleware/errorHandler.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
const environment = process.env.NODE_ENV || 'production';
console.log("ENVIRONMENT: ",environment)
const envFile = environment === 'production' ? '.env' : '.env.local';

dotenv.config({ path: envFile });

const app=express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.CORES_ALLOW);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});
console.log("CORS ALLOW: ",process.env.CORES_ALLOW)
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user',authRoutes);
app.use('/post',postRoutes);
app.use(errorHandler);
app.use(express.urlencoded({ extended: true}));

app.use(cors({origin: process.env.CORES_ALLOW}));

export default app;