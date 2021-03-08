const express = require('express')
const conn = require('../conn')
const feedback = express.Router()

// GET DE DADOS PARA A DASHBOARD ADM
feedback.get('/feedback', (req, res, next)=> {
    let sql = `SELECT * FROM feedback`
    conn.query(sql, (error, result)=> {
        res.json(result)
    })
})

// NOVO FEEDBACK
feedback.post('/feedback', (req, res, next)=> {
    let dados = {
        nome: req.body.nome,
        email: req.body.email,
        msg: req.body.msg
    }
    let sql = `INSERT INTO feedback SET ?`
    conn.query(sql, dados, (error, result)=> {
        res.json({mensagem: "feedback cadastrado com sucesso!", log: result})
    })
})

module.exports = feedback

