const express = require('express')
const conn = require('../../conn')
const cobre = express.Router()

// EXIBE COBRE <-- AJUSTAR -->
cobre.get('/cobre/id=:id', (req, res, next)=> {
    let id = req.params.id
    let sql = `
    SELECT * FROM cobre WHERE usuarioId = ${id}
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// CADASTRAR 
cobre.post('/cobre/cad/id=:usuarioId', (req, res, next) => {
    let dados = {
        usuarioId: req.params.usuarioId,
        descricao: req.body.descricao,
        peso: req.body.peso,
        valor: req.body.valor,
    }
    let sql = `INSERT INTO cobre SET ?`
    conn.query(sql, dados, (error, result)=> {
        res.json([{msg: 'material(cobre) cadastrado!'},{dados}, {log: result}])
    })
})

// ALTERAR DADOS DO MATERIAL(COBRE)
cobre.post('/cobre/alt/id=:id', (req, res, next) => {
    let id = req.params.id
    let dados = {
        descricao: req.body.descricao,
        peso: req.body.peso,
        valor: req.body.valor,
    }
    conn.query(`UPDATE cobre set? WHERE usuarioId=${id}`, dados, () => {
        res.json({msm: `registro ${id} alterado para...`, dado: dados})
    })
})

//DELETAR MATERIAL(COBRE)
cobre.delete('/cobre/del/id=:id', (req, res, next) => {
    let dados = req.params.id
    let sql = `DELETE FROM cobre WHERE usuarioID=${dados} `
    conn.query(sql, (error, result) => {
        res.json({msg:`registro ${dados} deletado!`, log: result})
    })
})

module.exports = cobre