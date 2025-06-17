import express, { json } from 'express'
import { PORT } from './Config/env.js'
import connectToDB from './Config/Db.js'
import ProductRoute from "./Routes/ProductRoutes.js"
import cartRoutes from "./Routes/CartRoutes.js";
import cors from "cors" 
import CustomerRoutes from "./Routes/CustomerRoutes.js"

const app = express() 
const Serverport = PORT || 5000;

app.use(json())
app.use(cors({
  origin:"http://localhost:5173"
}))

app.use("/api",ProductRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/customer",CustomerRoutes);


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(Serverport,()=>{
    connectToDB()
    console.log(`server is running http://localhost:${Serverport}`);
})