const express=require('express')
const router = express.Router()
const customers=require('../models/customer')

router.get('/entry/:id',async(req,res)=>{
    let {id}=req.params;
    let data=await customers.find({_id:id})
    res.json(data)
})

module.exports=router