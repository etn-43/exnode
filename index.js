const customExpress = require('./config/customExpress')

const appo = customExpress()


appo.listen(3000, () => console.log('servidor rodando na porta 3000'))

appo.get('/', (req, res) => res.send('Servidor rodando, tudo ok'))