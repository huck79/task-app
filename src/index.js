const express = require('express')
const jwt = require('jsonwebtoken')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
//     console.log(req.method, req.path)
//     next()
// })

// app.use((req, res, next) => {
//     req.statusCode(503).send('Site is currently down for maintenance. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and listening on port ' + port)
})

const myFunction = async () => {
    const token = jwt.sign({ _id: 'asdfg' }, 'nonyadamnbizzness', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'nonyadamnbizzness')
    console.log(data)
}

myFunction()