const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

//rotas
const users = require('./routes/usuarios')
app.use(users)
const enderecos = require('./routes/enderecos')
app.use(enderecos)
const materiais = require('./routes/materiais')
app.use(materiais)
const agendamento=require('./routes/agendamento')
app.use(agendamento)

app.listen(4000, () => {
    console.log('Rodando em: http://localhost:4000/')
})
