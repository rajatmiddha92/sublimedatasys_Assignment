const express=require('express')
const router = express.Router()
const customers=require('../models/customer')

router.get('/cities', async (req, res) => {
    try {
      const cities = await customers.aggregate([
        { $group: { _id: '$city', count: { $sum: 1 } } },
        { $project: { _id: 0, city: '$_id', count: 1 } }
      ]).exec();
  
      res.status(200).json(cities);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports=router