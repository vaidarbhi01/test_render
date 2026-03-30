const express = require('express')
const path = require('path')
const hogganMiddleware = require('hogan-middleware')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hogganMiddleware.__express)
app.use(express.static(path.join(__dirname, 'public')))

const myRoutes = require('./routes/index')
app.use('/', myRoutes)
//app.listen(1000)
const PORT = process.env.PORT || 1000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
