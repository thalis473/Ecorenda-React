const express = require('express')
const conn = require('../conn')
const catadores = express.Router()



catadores.get('/catadores', (req, res, next) => {
    let sql = `select * from usuario
    inner join endereco on usuario.id = endereco.id_usuario 
    inner join usuario_material on usuario_material.id_usuario = usuario.id 
    inner join material on usuario_material.id_material = material.id
    left join agendamento on agendamento.id_usuariodoador = usuario.id or agendamento.id_usuariocatador = usuario.id
    where endereco.principal = true`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

catadores.get('/catadores/email=:email', (req, res, next) => {
    let dados = req.params.email
    let sql = `select usuario.*, endereco.*, material.nome as material from usuario
    inner join endereco on usuario.id = endereco.id_usuario 
    inner join usuario_material on usuario_material.id_usuario = usuario.id 
    inner join material on usuario_material.id_material = material.id
    where endereco.principal = true and usuario.email= "${dados}"`
    conn.query(sql, (error, result) => {
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