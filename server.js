const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.get('/echo', (req, res) => {
    res.jsonp(req.query)
  })

  server.use(jsonServer.bodyParser)


server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})