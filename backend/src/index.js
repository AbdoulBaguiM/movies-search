require('dotenv').config()
const express = require('express')
const client = require('./elasticsearch/client')
const moviesRouter = require('./data/movie_api')
const cors = require('cors')

const app = express()

app.use('/ingest_movies', moviesRouter)
app.use(cors())

app.get('/api/movies', (req, res) => {
  async function sendESRequest() {
    const body = await client.search({
      index: 'movies',
      body: {
        size: 300,
      },
    })
    res.json(body.hits.hits)
  }
  sendESRequest()
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
