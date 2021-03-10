const express = require('express')
const conn = require('../../conn')
const materiais = express.Router()

//EXIBE MATERIAIS DOS USUARIOS
materiais.get('/materiais', (req, res, next)=> {
    let sql = `
    SELECT usuarios.nome, usuarios.email, materiais.*, 
    aluminio.descricao as descA, aluminio.peso as pesoA, aluminio.valor as valorA, 
    cobre.descricao as descC, cobre.peso as pesoC, cobre.valor as valorC, 
    plastico.descricao as descP, plastico.peso as pesoP, plastico.valor as valorP 
    FROM usuarios 
    LEFT OUTER JOIN materiais
    ON usuarios.id = materiais.usuarioId
    LEFT OUTER JOIN aluminio
    ON usuarios.id = aluminio.usuarioId
    LEFT OUTER JOIN cobre
    ON usuarios.id = cobre.usuarioId
    LEFT OUTER JOIN plastico
    ON usuarios.id = plastico.usuarioId
    `
    conn.query(sql, (error, result)=> {
        res.json(result)
    })
})

//BUSCA DE MATERIAIS POR USUARIO
materiais.get('/materiais/busca/id=:usuarioId', (req, res, next)=> {
    let id = req.params.usuarioId
    let sql = `
    SELECT usuarios.nome, usuarios.email, materiais.*, 
    aluminio.descricao as descA, aluminio.peso as pesoA, aluminio.valor as valorA, 
    cobre.descricao as descC, cobre.peso as pesoC, cobre.valor as valorC, 
    plastico.descricao as descP, plastico.peso as pesoP, plastico.valor as valorP 
    FROM usuarios 
    LEFT OUTER JOIN materiais
    ON usuarios.id = materiais.usuarioId
    LEFT OUTER JOIN aluminio
    ON usuarios.id = aluminio.usuarioId
    LEFT OUTER JOIN cobre
    ON usuarios.id = cobre.usuarioId
    LEFT OUTER JOIN plastico
    ON usuarios.id = plastico.usuarioId
    WHERE materiais.usuarioId = ${id}
    `
    conn.query(sql, (error, result)=> {
        res.json({
            materiais: [
                {nome: result[0].fk_aluminioId ? "aluminio" : null, valor: result[0].valorA, peso: result[0].pesoA, descricao: result[0].descA},
                {nome: result[0].fk_cobreId ? "cobre" : null, valor: result[0].valorC, peso: result[0].pesoC, descricao: result[0].descC},
                {nome: result[0].fk_plasticoId ? "plastico" : null, valor: result[0].valorP, peso: result[0].pesoP, descricao: result[0].descP}
            ]
        })
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
materiais.post('/materiais/cad/id=:usuarioId', (req, res, next)=> {
    let dados = {
    usuarioId: req.params.usuarioId,

    }
    conn.query(`INSERT INTO materiais(usuarioId) VALUES(${dados.usuarioId})`, (erro, result)=> {
        res.json([{msg: 'material cadastrado!'},{dados: dados}, {log: result}])
    })
})

//ALTERAR DADOS DA TABELA MATERIAIS <-- no user -->
materiais.post('/materiais/alt/id=:usuarioId', (req, res, next) => {
    let dados = {
        usuarioId: req.params.usuarioId,
        fk_aluminioId: req.body.fk_aluminioId,
        fk_cobreId: req.body.fk_cobreId,
        fk_plasticoId: req.body.fk_plasticoId
    }
    let sql = `
    UPDATE materiais SET ? WHERE usuarioId=${dados.usuarioId}
    `

    conn.query(sql, dados, (error, result)=> {
        res.json(result)
    })
})


module.exports = materiais