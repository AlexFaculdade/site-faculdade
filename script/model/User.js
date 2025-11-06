// Classe para o objeto do user
class User {
    nome
    email
    senha
    carrosFavoritados
    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.senha = senha
        this.carrosFavoritados = []
    }

    adicionarCarroFavorito(carro) {
        this.carrosFavoritados.push(carro)
    }

    removerCarroFavorito(carro) {
        const index = this.carrosFavoritados.indexOf(carro);
        if (index > -1) {
            this.carrosFavoritados.splice(index, 1);
        }
    }

    listarCarrosFavoritados() {
        return this.carrosFavoritados;
    }
}
