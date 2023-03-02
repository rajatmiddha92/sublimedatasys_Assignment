const express=require('express')
const router = express.Router()
const customers=require('../models/customer')

router.get('/users', async (req, res) => {
    const { first_name, last_name, city, page } = req.query;
    const limit = 5; // Number of results per page
    const skip = (page - 1) * limit; // Calculate how many results to skip
  
    // Build query object based on provided search parameters
    const query = {};
    if (first_name) query.first_name = { $regex: new RegExp(first_name, 'i') };
    if (last_name) query.last_name = { $regex: new RegExp(last_name, 'i') };
    if (city) query.city = { $regex: new RegExp(city, 'i') };
  
    try {
      // Retrieve users matching search parameters with pagination
      const users = await customers.find(query).skip(skip).limit(limit).exec();
  
      // Retrieve total count of users matching search parameters
      const totalUsers = await customers.countDocuments(query);
  
      // Calculate total number of pages
      const totalPages = Math.ceil(totalUsers / limit);
  
      res.status(200).json({
        users,
        currentPage: parseInt(page),
        totalPages,
        totalResults: totalUsers
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  


module.exports=router