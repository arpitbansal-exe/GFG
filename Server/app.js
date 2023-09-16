import express from 'express';
import authRoutes from "./routes/authroutes.js";
import postRoutes from "./routes/postroutes.js";
import errorHandler from './middleware/errorHandler.js';
import bodyParser from 'body-parser';

const app=express();

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use('/user',authRoutes);
app.use('/post',postRoutes);
app.use(errorHandler);
app.use(express.urlencoded());


// app.use(express.static('public'));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

export default app;