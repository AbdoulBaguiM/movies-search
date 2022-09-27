require('dotenv').config()
const express = require('express')
const client = require('./elasticsearch/client')
const moviesRouter = require('./data/movie_api')
const cors = require('cors')

const app = express()

app.use('/ingest_movies', moviesRouter)
app.use(cors())

app.get('/all', async (request, response) => {
  const body = await client.search({
    index: 'movies',
    body: {
      size: 100,
    },
  })
  response.json(body.hits.hits)
})

app.get('/api/movies', async (request, response) => {
  const body = await client.search({
    index: 'movies',
    body: {
      sort: [
        {
          imDbRating: {
            order: request.query.order,
          },
        },
      ],
      query: {
        bool: {
          must: [
            {
              terms: {
                genres: request.query.genres,
              },
            },
            {
              match: {
                title: request.query.title,
              },
            },
          ],
        },
      },
    },
  })
  response.json(body.hits.hits)
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
