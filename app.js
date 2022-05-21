const express = require('express')
const app = express()

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('build'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line no-console
})
