import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import guitarsRoute from  "./routes/guitars.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()


const port = process.env.PORT || 3006

app.use("/guitars",guitarsRoute);

app.use("/", (req,res)=>('API UCAMP'));

app.listen (3005, ()=>{
    console.log(`el backend  esta  corriendo em el puerto ${port}`)
})
