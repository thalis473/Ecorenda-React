const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('./build'))

//rotas
const users = require('./routes/usuarios')
app.use(users)
const enderecos = require('./routes/enderecos')
app.use(enderecos)
const agendamento=require('./routes/agendamento')
app.use(agendamento)
const aluminio = require('./routes/materiais/aluminio')
app.use(aluminio)

app.listen(4000, () => {
    console.log('Rodando em: http://localhost:4000/')
})
