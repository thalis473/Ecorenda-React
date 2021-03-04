const express = require('express')
const conn = require('../conn')
const enderecos = express.Router()

// EXIBE ENDERECOS DO USUARIO PARA A PÁGINA DE BUSCAS
enderecos.get('/enderecos', (req, res, next)=> {
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

// CADASTRAR UM ENDEREÇO
enderecos.post('/enderecos/cad/id=:usuarioID', (req, res, next) => {
    let dados = {
        usuarioID: req.params.usuarioID,
        estado: req.body.estado,
        bairro: req.body.bairro,
        rua: req.body.rua,
        num: req.body.num,
        complemento: req.body.complemento,
    }
    let sql = `INSERT INTO enderecos SET ?`
    conn.query(sql, dados, (error, result)=> {
        res.json([{msg: 'endereço cadastrado!'},{dados}, {log: result}])
    })
})


// ALTERAR DADOS DO ENDEREÇO DO USUARIO
enderecos.post('/alterarenderecos/:id', (req, res, next) => {
    let id = req.params.id
    let dados = {
        estado: req.body.estado,
        bairro: req.body.bairro,
        rua: req.body.rua,
        num: req.body.num,
        complemento: req.body.complemento
    }
    conn.query(`UPDATE enderecos set? WHERE usuarioId=${id}`, dados, () => {
        console.log(id)
        res.json({msm: `registro ${id} alterado para...`, dado: dados})
    })
})

// DELETAR ENDEREÇO
enderecos.delete('/enderecos/del/id=:id', (req, res, next) => {
    let dados = req.params.id
    let sql = `DELETE FROM enderecos WHERE usuarioID=${dados} `
    conn.query(sql, (error, result) => {
        res.json({msg:`registro ${dados} deletado!`, log: result})
    })
})


module.exports = enderecos