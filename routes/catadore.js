const express = require('express')
const conn = require('../conn')
const catadores = express.Router()

catadores.get('/catadores', (req, res, next) => {
    conn.query('select * from usuarios', (error, result) => {
        res.json(result)
    })
})

catadores.get('/catadores/id=:id', (req, res, next) => {
    let dados = req.params.id
    conn.query(`select * from usuarios where id=${dados}`, (error, result) => {
        res.json(result)
    })
})

catadores.post('/catadores', (req, res, next) => {
    let dados = {
        cpf: req.body.cpf,
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        endereco: req.body.endereco,
        celular: req.body.celular,
        telefone: req.body.telefone,
        data_nascimento: req.body.data_nascimento,
        data_cadastro: req.body.data_cadastro
    }
    conn.query('insert into usuarios set?', dados, () => {
        res.json([{msg: 'usuario cadastrado!'},{dados}])
    })
})

catadores.delete('/catadores/id=:id', (req, res, next) => {
    let dados = req.params.id
    conn.query(`delete from usuarios where id=${dados}`, () => {
        res.json({msg:`registro ${dados} deletado!`})
    })
})

catadores.put('/catadores/id=:id', (req, res, next) => {
    let dados = {
            id: req.params.id,
            cpf: req.body.cpf,
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            endereco: req.body.endereco,
            celular: req.body.celular,
            telefone: req.body.telefone,
            data_nascimento: req.body.data_nascimento,
            data_cadastro: req.body.data_cadastro
    }
    conn.query(`UPDATE usuarios set? WHERE id=${dados.id}`, dados, () => {
        res.json({msm: `registro ${dados.id} alterado para...`, dado: dados})
    })
})

module.exports = catadores