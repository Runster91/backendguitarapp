import express from "express"
const router = express.Router()

router.get("/", (req, res)=>{
    res.json({
        res: "esta ruta es de guitarra"
    })
})

router.post("/", (req,res)=>{
    const {guitarra}= req.body
    console.log(guitarra)
    res.json({
        res: "guitarra"
    })
})





export default router