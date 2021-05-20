class Tabelas {
    init (conexao){
        this.conexao = conexao
        this.criarAtendimento()
    }

    criarAtendimento(){
        const sql = 'CREATE TABLE Atendimentos ( id int, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, estado varchar(20) NOT NULL )'

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