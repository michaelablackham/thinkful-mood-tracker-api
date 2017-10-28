const express = require('express')
const entries = require('./routers/entries')

const port = process.env.PORT || 8080
const app = express()

app.use(express.static('src/public'))
app.use('/entries', entries)

app.get('/', (req, res) => res.end('Hello'))

function serve () {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Listening on ${port}`)
      resolve(server)
    })

    server.on('error', reject)
  })
}

if (require.main === module) {
  serve().catch(console.error.bind(console))
}

module.exports = { app, serve }
