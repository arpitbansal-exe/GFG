import express from 'express';
import authRoutes from "./routes/authroutes.js";
import postRoutes from "./routes/postroutes.js";
import errorHandler from './middleware/errorHandler.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app=express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://arpitbansal-exe.github.io");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user',authRoutes);
app.use('/post',postRoutes);
app.use(errorHandler);
app.use(express.urlencoded({ extended: true}));

app.use(cors({origin: "http://localhost:3000"}));


// app.use(express.static('public'));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

export default app;