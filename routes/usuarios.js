const express = require('express')
const conn = require('../conn')
const users = express.Router()


// EXIBE USUARIOS
users.get('/users', (req, res, next) => {
    let sql = `SELECT usuarios.id, usuarios.atribuicao, usuarios.nome, enderecos.* 
    FROM usuarios JOIN enderecos
    ON usuarios.id = enderecos.usuarioID`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// VALIDAÇÃO LOGIN
users.get('/users/email=:email/senha=:senha', (req, res, next) => {
    let dados = {
        email: req.params.email,
        senha: req.params.senha
    }
    let sql = `SELECT usuarios.*, enderecos.*
    FROM usuarios JOIN enderecos
    ON usuarios.id = enderecos.usuarioID
    WHERE email = "${dados.email}"
    AND senha = MD5('${dados.senha}')`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

//CADASTRAR USUARIO (INCOMPLETO)
users.post('/users', (req, res, next) => {
    let dados = {
        cpf: req.body.cpf,
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        endereco: req.body.endereco,
        celular: req.body.celular,
        telefone: req.body.telefone,
    }
    conn.query('insert into usuarios set?', dados, () => {
        res.json([{msg: 'usuario cadastrado!'},{dados}])
    })
})

// ALTERAR USUARIO (INCOMPLETO)
users.put('/users/id=:id', (req, res, next) => {
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

// DELETAR USUARIO
users.delete('/users/id=:id', (req, res, next) => {
    let dados = req.params.id
    conn.query(`delete from usuarios where id=${dados}`, () => {
        res.json({msg:`registro ${dados} deletado!`})
    })
})

module.exports = users