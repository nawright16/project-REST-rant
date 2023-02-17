const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendStatus('Hello World!')
})

app.listen(3000)

