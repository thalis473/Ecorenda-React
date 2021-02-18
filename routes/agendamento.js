const express = require('express')
const conn = require('../conn')
const agendamento = express.Router()

// EXIBE Agendamento DO USUARIO
agendamento.get('/agendamento', (req, res, next)=> {
    let sql = ``
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

//BUSCA POR ENDEREÇOS
agendamento.get('/agendamento/busca', (req, res, next)=> {
    let dados = {
     
    }
    let sql = ``
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// CADASTRAR UM ENDEREÇO
agendamento.post('/agendamento/cad/id=:usuarioID', (req, res, next) => {
    let dados = {
        usuarioID: req.params.usuarioID,
       
    }
    let sql = `INSERT INTO agendamento(usuarioID) VALUES(${dados.usuarioID})`
    conn.query(sql, (error, result)=> {
        res.json([{msg: 'endereço cadastrado!'},{dados}, {log: result}])
    })
})

// DELETAR ENDEREÇO
agendamento.delete('/agendamento/del/id=:id', (req, res, next) => {
    let dados = req.params.id
    let sql = `DELETE FROM agendamento WHERE usuarioID=${dados} `
    conn.query(sql, (error, result) => {
        res.json({msg:`registro ${dados} deletado!`, log: result})
    })
})




module.exports = agendamento