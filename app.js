const express = require('express')
const app = express()
const port = 3000
const staticDir = __dirname + "\\static\\";

app.use(express.static(__dirname + "\\static\\"));

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('GG.ejs'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));