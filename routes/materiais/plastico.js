const express = require('express')
const conn = require('../../conn')
const plastico = express.Router()

// EXIBE plastico <-- AJUSTAR -->
plastico.get('/plastico/id=:id', (req, res, next)=> {
    let id = req.params.id
    let sql = `
    SELECT * FROM plastico WHERE usuarioId = ${id}
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// CADASTRAR 
plastico.post('/plastico/cad/id=:usuarioId', (req, res, next) => {
    let dados = {
        usuarioId: req.params.usuarioId,
        descricao: req.body.descricao,
        peso: req.body.peso,
        valor: req.body.valor,
    }
    let sql = `INSERT INTO plastico SET ?`
    conn.query(sql, dados, (error, result)=> {
        res.json([{msg: 'material(plastico) cadastrado!'},{dados}, {log: result}])
    })
})

// ALTERAR DADOS DO MATERIAL(plastico)
plastico.post('/plastico/alt/id=:id', (req, res, next) => {
    let id = req.params.id
    let dados = {
        descricao: req.body.descricao,
        peso: req.body.peso,
        valor: req.body.valor,
    }
    conn.query(`UPDATE plastico set? WHERE usuarioId=${id}`, dados, () => {
        res.json({msm: `registro ${id} alterado para...`, dado: dados})
    })
})

//DELETAR MATERIAL(plastico)
plastico.delete('/plastico/del/id=:id', (req, res, next) => {
    let dados = req.params.id
    let sql = `DELETE FROM plastico WHERE usuarioID=${dados} `
    conn.query(sql, (error, result) => {
        res.json({msg:`registro ${dados} deletado!`, log: result})
    })
})

module.exports = plastico