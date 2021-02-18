const express = require('express')
const conn = require('../conn')
const enderecos = express.Router()

// EXIBE ENDERECOS DO USUARIO
enderecos.get('/enderecos', (req, res, next)=> {
    let sql = `SELECT usuarios.id, usuarios.nome, usuarios.email, enderecos.*
    FROM usuarios 
    LEFT OUTER JOIN enderecos
    ON usuarios.id = enderecos.usuarioID`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

//BUSCA POR ENDEREÇOS
enderecos.get('/enderecos/busca/:rua', (req, res, next)=> {
    let dados = {
        cep: req.body.cep,
        estado: req.body.estado,
        bairro: req.body.bairro,
        rua: req.params.rua
    }
    let sql = `SELECT usuarios.nome, usuarios.email, enderecos.*
    FROM usuarios 
    LEFT OUTER JOIN enderecos
    ON usuarios.id = enderecos.usuarioID WHERE
    enderecos.rua LIKE "%${dados.rua}%"`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// CADASTRAR UM ENDEREÇO
enderecos.post('/enderecos/cad/id=:usuarioID', (req, res, next) => {
    let dados = {
        usuarioID: req.params.usuarioID,
        // cep: req.body.cep,
        // estado: req.body.estado,
        // bairro: req.body.bairro,
        // rua: req.body.rua,
        // num: req.body.num,
        // complemento: req.body.complemento,
    }
    let sql = `INSERT INTO enderecos(usuarioID) VALUES(${dados.usuarioID})`
    conn.query(sql, (error, result)=> {
        res.json([{msg: 'endereço cadastrado!'},{dados}, {log: result}])
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

/*Teste*/
enderecos.post('/alterarenderecos/:id', (req, res, next) => {
    let id = req.params.id
    let dados = {
      // cep: req.body.cep,
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



module.exports = enderecos