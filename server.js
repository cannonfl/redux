'use strict'
const express = require('express')
const path = require('path')

let app = express()

// Middleware to define folder to static files and images
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
