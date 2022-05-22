const express = require('express')
const app = express()
const cors = require('cors')

const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)
app.use(cors())


// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('build'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('3')
})

app.use('/api', router)

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line no-console
})
