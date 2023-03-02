const express=require('express')
const router = express.Router()
const customers=require('../models/customer')


router.post('/entry',async(req,res)=>{
    //to make new entry in a db
    // console.log(req.body)
    let {first_name,last_name,city,company}=req.body
    let data=await customers.create({first_name,last_name,city,company})
    res.json(data)
})

module.exports = router;