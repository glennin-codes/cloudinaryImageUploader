
import express from 'express'
import dotenv from 'dotenv'
import connect from './db/config.js'
import carsRouter from "./routes/cars.js"
import carRouter from "./routes/car.js"
import cors from 'cors'

import bodyParser from 'body-parser';
import { addCar } from './controllers/addCar.js'
dotenv.config()

const app= express()
app.use(express.json({ limit: '200mb',}));
 app.use(bodyParser.json({limit:"200mb"}))
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    limit: '200mb',
    extended: true
    }));
app.use(cors());
const PORT= process.env.PORT || 8000

app.get('/',(req,res)=>{
res.send(' testing 2..3...4:-) ')
})

app.use('/cars',carsRouter);
app.use("/car",carRouter);

const start= async  ()=>{

try{
await connect(process.env.MONGO_URL)


app.listen(PORT, ()=>{
console.log("server running on "+ PORT)


})
if (connect){
    console.log("connected to db");
}
}
catch(error){
    console.log(error)

}

}
start();
