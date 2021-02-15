const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

//rotas
const estabelecimento = require('./routes/estabelecimentos')
app.use(estabelecimento)
const catadores = require('./routes/catadore')
app.use(catadores)
const doadores = require('./routes/doadores')
app.use(doadores)
const users = require('./routes/usuarios')
app.use(users)

app.listen(4000, () => {
    console.log('Rodando em: http://localhost:4000/')
})
