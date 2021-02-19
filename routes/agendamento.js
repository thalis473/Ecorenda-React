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
    
    let sql = `select agendamentos.*, doador.nome as nomeDoador, catador.nome as nomeCatador
    from agendamentos
   left join usuarios as doador on doador.id = agendamentos.doador
   left join usuarios as catador on catador.id = agendamentos.catador
   `
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// CADASTRAR UM ENDEREÇO
agendamento.post('/agendamento/cad/id=:usuarioID', (req, res, next) => {
   
    let dados = {
        doador: req.params.usuarioID,
        material: req.body.material,
        observacao: req.body.observacao,
        localizacao:req.body.localizacao,
        quantidade:req.body.quantidade,
    }

    let sql = `INSERT INTO agendamentos set?`
    conn.query(sql,dados, (error, result)=> {
        res.json([{msg: 'agendamento cadastrado!'},{dados}])
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