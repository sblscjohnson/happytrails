const express = require('express')
const app = express()

require('dotenv').config()
const {SERVER_PORT} = process.env




const port = SERVER_PORT || 3005
app.listen(port, () => console.log(`listening on ${port}`))