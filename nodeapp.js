const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.status(200).send('Status: OK')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
