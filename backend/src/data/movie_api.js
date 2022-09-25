const express = require('express')
const axios = require('axios')
const client = require('../elasticsearch/client')

const moviesRouter = express.Router()
const URL = `https://api.themoviedb.org/3/movie`

moviesRouter.get('/top_rated', async (request, response) => {
  response.json('Retrieving top_rated movies ...')
  try {
    console.log('Processing ...')

    const movies = await axios.get(`${URL}/top_rated`, {
      headers: {
        'Content-Type': ['application/json', 'charset=utf-8'],
      },
      params: {
        api_key: process.env.API_KEY,
      },
    })

    console.log('Data retrieved successfuly')

    const results = movies.data.results

    console.log('Starting data indexation ...')

    results.map(async (result) => {
      await client.index({
        index: 'movies',
        id: result.id,
        body: result,
        pipeline: 'movies_pipeline',
      })
    })

    console.log('Data has been indexed')
  } catch (error) {
    console.log(error)
  }
})

module.exports = moviesRouter
