const express = require('express')
const conn = require('../../conn')
const aluminio = express.Router()

// EXIBE ALUMINIO <-- AJUSTAR -->
aluminio.get('/aluminio/id=:id', (req, res, next)=> {
    let id = req.params.id
    let sql = `
    SELECT * FROM aluminio WHERE usuarioId = ${id}
    `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// CADASTRAR 
aluminio.post('/aluminio/cad/id=:usuarioId', (req, res, next) => {
    let dados = {
        usuarioId: req.params.usuarioId,
        descricao: req.body.descricao,
        peso: req.body.peso,
        valor: req.body.valor,
    }
    let sql = `INSERT INTO aluminio SET ?`
    conn.query(sql, dados, (error, result)=> {
        res.json([{msg: 'material(aluminio) cadastrado!'},{dados}, {log: result}])
    })
})


// ALTERAR DADOS DO MATERIAL(ALUMINIO)
aluminio.post('/aluminio/alt/id=:id', (req, res, next) => {
    let id = req.params.id
    let dados = {
        descricao: req.body.descricao,
        peso: req.body.peso,
        valor: req.body.valor,
    }
    conn.query(`UPDATE aluminio set? WHERE usuarioId=${id}`, dados, () => {
        res.json({msm: `registro ${id} alterado para...`, dado: dados})
    })
})

//DELETAR MATERIAL(ALUMINIO)
aluminio.delete('/aluminio/del/id=:id', (req, res, next) => {
    let dados = req.params.id
    let sql = `DELETE FROM aluminio WHERE usuarioID=${dados} `
    conn.query(sql, (error, result) => {
        res.json({msg:`registro ${dados} deletado!`, log: result})
    })
})

module.exports = aluminio