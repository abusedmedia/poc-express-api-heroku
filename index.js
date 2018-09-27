const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'})
})

app.use((req, res) => res.status(404).send({code: '404', message: 'no found'}))

app.listen(3000, () => console.log('server started'))
