import express, { json, urlencoded } from 'express'
import { PORT, RAZOR_PAY_API_KEY } from './Config/env.js'
import connectToDB from './Config/Db.js'
import ProductRoute from "./Routes/ProductRoutes.js"
import cartRoutes from "./Routes/CartRoutes.js";
import cors from "cors" 
import CustomerRoutes from "./Routes/CustomerRoutes.js"
import paymentRoute from "./Routes/paymentRoutes.js"
import dotenv from "dotenv";


dotenv.config({ path: ".env" });

const app = express() 
const Serverport = process.env.PORT || 5000;

app.use(json())
app.use(cors({
  origin:"*"
}))
app.use(urlencoded({extended:true}))

app.use("/api",ProductRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/customer",CustomerRoutes);
app.use("/api/payment", paymentRoute)


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/api/getkey",(req,res)=> res.status(200).json({key:RAZOR_PAY_API_KEY}))

app.listen(Serverport,()=>{
    connectToDB()
    console.log(`server is running http://localhost:${Serverport}`);
})