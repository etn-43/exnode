const Atendimento = require('../models/atendimentos')


module.exports = app => { 

    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimento'))

    app.post('/atendimentos', (req, res) => {
        const atende = req.body
        Atendimento.adiciona(atende)
        res.send('Você está na rota de atendimento com um POST')
    })
}