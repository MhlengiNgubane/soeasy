const express = require('express')
const app = express()
const dotenv = require('dotenv');
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`soeasy backend is running on port ${port}`))