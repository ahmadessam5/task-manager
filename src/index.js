const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use( (req , res , next ) => {
//     res.status(503).send('Site under maintenance!!!')

// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//
//Without middleware: new request -> run route handler
//
//With middleware: new request -> do something -> run route handler 
//

app.listen(port, () => {
    console.log('App is up on port' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign( {_id:'2#$%^&*8888887654'}, 'thisisrandomtomkenchar', { expiresIn:'7 days' })
//     console.log(token)

//     const data = jwt.verify(token,'thisisrandomtomkenchar')
//     console.log(data)
// }

// const bcrybt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Hassan888'
//     const hashedPassword = await bcrybt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrybt.compare('hassan888',hashedPassword)
//     console.log(isMatch)
// }

// myFunction()