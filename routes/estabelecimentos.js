const express = require('express')
const conn = require('../conn')
const estabelecimentos = express.Router()

estabelecimentos.get('/estabelecimentos', (req, res, next) => {
    conn.query('select * from estabelecimentos', (error, result) => {
        res.json(result)
    })
})

estabelecimentos.get('/estabelecimentos/id=:id', (req, res, next) => {
    let dados = req.params.id
    conn.query(`select * from estabelecimentos where id=${dados}`, (error, result) => {
        res.json(result)
    })
})

estabelecimentos.post('/estabelecimentos', (req, res, next) => {
    let dados = {
        cnpj: req.body.cnpj,
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        atendimento: req.body.atendimento,
        email: req.body.email,
        site: req.body.site,
        data_cadastro: req.body.data_cadastro
    }
    conn.query('insert into estabelecimentos set?', dados, () => {
        res.json([{msg: 'estabelecimento cadastrado!'},{dados}])
    })
})

estabelecimentos.delete('/estabelecimentos/id=:id', (req, res, next) => {
    let dados = req.params.id
    conn.query(`delete from estabelecimentos where id=${dados}`, () => {
        res.json({msg:`registro ${dados} deletado!`})
    })
})

estabelecimentos.put('/estabelecimentos/id=:id', (req, res, next) => {
    let dados = {
            id: req.params.id,
            cnpj: req.body.cnpj,
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            atendimento: req.body.atendimento,
            email: req.body.email,
            site: req.body.site,
            data_cadastro: req.body.data_cadastro
    }
    conn.query(`UPDATE estabelecimentos set? WHERE id=${dados.id}`, dados, () => {
        res.json({msm: `registro ${dados.id} alterado para...`, dado: dados})
    })
})

module.exports = estabelecimentos