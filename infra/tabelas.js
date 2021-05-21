class Tabelas {
    init (conexao){
        this.conexao = conexao
        this.criarAtendimento()
    }

    criarAtendimento(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos ( id int, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, estado varchar(20) NOT NULL )'
        //o const sql apresentado aqui é mais simples e da para prosseguir o curso, no alura é digitado uma sintax invalida.
        this.conexao.query(sql , (erro) =>{
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })

    }
}

module.exports = new Tabelas