const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const generateRubbish = require('./generate_rubbish')
const bodyParser = require('body-parser')
const port = 3000
//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
///靜態檔案
app.use(express.static('public'))
//boyd-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/generate-rubbish/', (req, res) => {
    const person = req.body.person
    const rubbish = generateRubbish(person)
    res.render('index', { rubbish })
})

app.listen(port, () => {
    console.log(`express server is running on http://localhost:${port}`)
})