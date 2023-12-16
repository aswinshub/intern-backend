const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const cors = require('cors')
require('./config/db')
app.use(morgan('dev'))
const PORT = process.env.PORT

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/userRoute')
const dashRoute = require('./routes/projectdashRoute')
const gradeRoute = require('./routes/gradeRoute')
const referenceRoute = require('./routes/referenceroute')
const commentRoute = require('./routes/commentRoute')
const isloggedinRoute = require("./routes/isloggedinRoute")

app.use('/user', userRoute)
app.use('/dash', dashRoute)
app.use('/grade', gradeRoute)
app.use('/referenceroute', referenceRoute)
app.use('/comments', commentRoute)
app.use('/protection', isloggedinRoute)




const subRoute = require('./routes/projectRoutes')
app.use('/form', subRoute)
const Studentdashboard = require('./routes/Studentdashboard')
app.use('/studentdashboardcheck', Studentdashboard)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

