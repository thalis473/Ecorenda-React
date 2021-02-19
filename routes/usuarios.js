const express = require('express')
const conn = require('../conn')
const users = express.Router()


// EXIBE USUARIOS
users.get('/users', (req, res, next) => {
    let sql = `SELECT usuarios.id, usuarios.nome, usuarios.atribuicao, enderecos.* , materiais.*
    FROM usuarios 
    LEFT OUTER JOIN enderecos
    ON usuarios.id = enderecos.usuarioID
    LEFT OUTER JOIN materiais
    ON usuarios.id = materiais.usuarioID`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// VALIDAÇÃO LOGIN + DADOS COMPLETOS DO USUARIO
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
    AND senha = MD5('${dados.senha}')`
    conn.query(sql, (error, result) => {
       res.json(result)
    })
})

// VALIDAÇÃO DE DADOS ATUALIZADOS
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

//CADASTRAR USUARIO 
users.post('/users/cad', (req, res, next) => {
    let dados = {
        nome: req.body.nome,
        atribuicao: req.body.atribuicao,
        email: req.body.email,
        senha: req.body.senha
    }
    let sql = `INSERT INTO usuarios(nome, email, senha, atribuicao)
    VALUES ('${dados.nome}', '${dados.email}', md5('${dados.senha}'), '${dados.atribuicao}')`
    conn.query(sql, (error, result) => {
       /* res.json([{msg: 'usuario cadastrado!'},{dados: dados}, {log: result}])*/
       res.json({msg:'usuario cadastrado'})
    })
})

// <-- ATENÇÃO -->
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
/*Teste*/
users.post('/alterar/:id', (req, res, next) => {
    let id = req.params.id
    let dados = {
        nome: req.body.nome,
    }
    conn.query(`UPDATE usuarios set? WHERE id=${id}`, dados, () => {
        res.json({msm: `registro ${id} alterado para...`, dado: dados})
    })
})

// DELETAR USUARIO
users.delete('/users/del/id=:id', (req, res, next) => {
    let dados = req.params.id
    let sql = `DELETE FROM usuarios WHERE id=${dados} `
    conn.query(sql, (error, result) => {
        res.json({msg:`registro ${dados} deletado!`, log: result})
    })
})

module.exports = users