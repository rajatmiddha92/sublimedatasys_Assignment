const mongoose=require('mongoose')
const schema=mongoose.Schema

const customerSchema=new schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    city:{type:String,required:true},
    company:{type:String,required:true}

})

const customers=mongoose.model('customers',customerSchema)

module.exports=customers