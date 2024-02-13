import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoute from './route/web'
import connectDB from './config/connectDB'
import cors from 'cors';

require('dotenv').config();

let app = express();
app.use(cors({ credentials: true, origin: true }));
//config app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//setup view engine
viewEngine(app);

//init web route
initWebRoute(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})