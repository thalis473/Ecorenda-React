const express = require('express')
const conn = require('../conn')
const materiais = express.Router()

//EXIBE MATERIAIS DOS USUARIOS
materiais.get('/materiais', (req, res, next)=> {
    let sql = `SELECT usuarios.nome, usuarios.email, materiais.*
    FROM usuarios 
    LEFT OUTER JOIN materiais
    ON usuarios.id = materiais.usuarioID`
    conn.query(sql, (error, result)=> {
        res.json(result)
    })
})

// <-- ATENÇÃO --> PARTE DA LOGICA ESTA SENDO IMPLEMENTADA NO FRONT
//BUSCA DE MATERIAIS POR TIPO
materiais.get('/materiais/busca/tipo=:tipo/tabela=:tabela', (req, res, next)=> {
    let dados = {
        tipo: req.params.tipo,
        tabela: req.params.tabela
    }
    let sql = `SELECT usuarios.nome, usuarios.email, materiais.*
    FROM usuarios 
    LEFT OUTER JOIN materiais
    ON usuarios.id = materiais.usuarioID WHERE
    materiais.tipo${dados.tabela} LIKE "${dados.tipo}%"`
    conn.query(sql, (error, result)=> {
        res.json(result)
    })
})

//CADASTRO DE MATERIAIS
materiais.post('/materiais/cad/id=:usuarioID', (req, res, next)=> {
    let dados = {
    usuarioId: req.params.usuarioID,

    // nomeAluminio: req.body.nomeAluminio,
    // tipoAluminio: req.body.tipoAluminio,
    // pesoAluminio: req.body.pesoAluminio,
    // valorAluminio: req.body.valorAluminio,

    // nomeCobre: req.body.nomeCobre,
    // tipoCobre: req.body.tipoCobre,
    // pesoCobre: req.body.pesoCobre,
    // valorCobre: req.body.valorCobre,

    // nomePlastico: req.body.nomePlastico,
    // tipoPlastico: req.body.tipoPlastico,
    // pesoPlastico: req.body.pesoPlastico,
    // valorPlastico: req.body.valorPlastico
    }
    conn.query(`INSERT INTO materiais(usuarioID) VALUES(${dados.usuarioId})`, (erro, result)=> {
        res.json([{msg: 'material cadastrado!'},{dados: dados}, {log: result}])
    })
})

// DELETAR MATERIAIS
materiais.delete('/materiais/del/id=:id', (req, res, next) => {
    let dados = req.params.id
    let sql = `DELETE FROM materiais WHERE usuarioID=${dados} `
    conn.query(sql, (error, result) => {
        res.json({msg:`registro ${dados} deletado!`, log: result})
    })
})

module.exports = materiais