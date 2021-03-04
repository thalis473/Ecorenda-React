 const express = require('express')
const conn = require('../conn')
const users = express.Router()


// EXIBE USUARIOS PARA A PÁGINA DE BUSCAS
users.get('/users', (req, res, next) => {
    let sql = `
    SELECT usuarios.nome, usuarios.atribuicao, enderecos.*, materiais.*
    FROM usuarios
    LEFT OUTER JOIN enderecos ON usuarios.id = enderecos.usuarioId
    LEFT OUTER JOIN materiais ON usuarios.id = materiais.usuarioId;
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// VALIDAÇÃO LOGIN + DADOS COMPLETOS DO USUARIO <-- AJUSTAR -->
users.get('/users/email=:email/senha=:senha', (req, res, next) => {
    let dados = {
        email: req.params.email,
        senha: req.params.senha
    }
    let sql = `SELECT usuarios.*, enderecos.*, materiais.*
    FROM usuarios LEFT OUTER JOIN enderecos
    ON usuarios.id = enderecos.usuarioID
	LEFT OUTER JOIN materiais ON usuarios.id = materiais.usuarioID
    WHERE email = "${dados.email}"
    AND senha = sha1('${dados.senha}')`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// VALIDAÇÃO DE DADOS PARA ATUALIZAR O REDUCER <-- AJUSTAR -->
users.get('/usersatt/email=:email/senha=:senha', (req, res, next) => {
    let dados = {
        email: req.params.email,
        senha: req.params.senha
    }
    let sql = `SELECT usuarios.*, enderecos.*, materiais.*
    FROM usuarios LEFT OUTER JOIN enderecos
    ON usuarios.id = enderecos.usuarioID
	LEFT OUTER JOIN materiais ON usuarios.id = materiais.usuarioID
    WHERE email = "${dados.email}"
    AND senha = '${dados.senha}'`
    conn.query(sql, (error, result) => {
       res.json(result)
    })
})

//CADASTRO DO USUARIO 
users.post('/users/cad', (req, res, next) => {
    let dados = {
        nome: req.body.nome,
        atribuicao: req.body.atribuicao,
        email: req.body.email,
        senha: req.body.senha
    }
    let sql = `INSERT INTO usuarios(nome, email, senha, atribuicao)
    VALUES ('${dados.nome}', '${dados.email}', sha1('${dados.senha}'), '${dados.atribuicao}')`
    conn.query(sql, (error, result) => {
       res.json({msg:'usuario cadastrado'})
    })
})

// <-- ATENÇÃO -->
// ALTERAR USUARIO (INCOMPLETO)

users.post('/alterar/:id', (req, res, next) => {
    let id = req.params.id
    let dados = {
        nome: req.body.nome,
        celular: req.body.celular,
        telefone: req.body.telefone,
        //APENAS PARA TESTES DE ADM
        // atribuicao: req.body.atribuicao
    }
    conn.query(`UPDATE usuarios set? WHERE id=${id}`, dados, () => {
        res.json({msm: `registro ${id} alterado para...`, dado: dados})
    })
})


module.exports = users