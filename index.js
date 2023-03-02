const express=require('express')
const app=express()
const connection=require('./connection/connection')
const entryRoutes=require('./routes/entry')
const searchRoutes=require('./routes/search')
const getSingledataRoutes=require('./routes/getsingledata')
const citiesRoutes=require('./routes/cities')

app.use(express.json())

app.use(entryRoutes)
app.use(searchRoutes)
app.use(getSingledataRoutes)
app.use(citiesRoutes)

app.listen(4000)
