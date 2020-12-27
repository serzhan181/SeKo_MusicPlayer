const ytdl = require('ytdl-core')
const express = require('express')
const cors = require('cors')
const { YTSearcher } = require('ytsearcher')
require('dotenv').config()
const searcher = new YTSearcher(process.env.YT_API_KEY)

const app = express()

//  apply to all requests
app.use(cors())

const port = 5000

app.get('/', (req, res) => {
  res.send('server works')
})

app.get('/song', async (req, res) =>
  ytdl
    .getInfo(req.query.id)
    .then((info) => {
      const audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
      res.set('Cache-Control', 'public, max-age=20000') //6hrs aprox
      res.json(audioFormats[1].url)
    })
    .catch((err) => res.status(400).json(err.message))
)

// SEARCH

app.get('/search', async (req, res) => {
  let result = await searcher.search(req.query.q, { type: 'video' })
  res.json(result)
})

app.listen(port, () => console.log(`Server is listening on port ${port}.`))
