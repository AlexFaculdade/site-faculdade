const USERS = "motorhub_users" // Cria a referência para salvar o objeto dos users no localStorage
const ANUNCIO = "motorhub_anuncios" // Cria a referência para salvar o objeto dos carros no localStorage
const USER_LOGGED = "motorhub_user_logged" // Cria a referência para salvar o user atual logado no localStorage
const ANUNCIO_ID = "motorhub_anuncios_id"
const ANUNCIO_CLICADO = "motorhub_anuncio_clicado"
const CATEGORIA_CLICADA = "motorhub_categoria_clicada"
const MARCA_INICIO_CLICADA = "motorhub_marca_inicio_clicada"
const CHASSI_INICIO_CLICADO = "motorhub_chassi_inicio_clicado"
// Uso de hashmap para salvar os usuários é em decorrência da sua velocidade ser O(1) para busca. 

// Busca todos os users do localStorage, se houver, converte para objeto (quando armazenado no localStorage, é armazenado
// com string) e então retorna a lista, se não houver simplesmente retorna chaves para indicar que é um hashmap
function getFromStorage(key) {
    let keyData = localStorage.getItem(key)
    return keyData ? JSON.parse(keyData) : {}
}

function getFromStorageUniqueValue(key) {
     let keyData = localStorage.getItem(key)
    return keyData ? JSON.parse(keyData) : null
}

// Função para salvar um user no localStorage. Antes de ser salvo ele é convertido em string
function saveToStorage(keyMap, key) {
    localStorage.setItem(key, JSON.stringify(keyMap))
}

class Database {
    // hashmap dos users
    static users = getFromStorage(USERS)// toda vez que é chamado ele atualiza a lista de users de acordo com o localStorage
    // o que evita perde de dados quando houver reload da página
    static anuncios =  getFromStorage(ANUNCIO)

    static anuncioClicado = getFromStorageUniqueValue(ANUNCIO_CLICADO)

    static categoriaClicada = getFromStorageUniqueValue(CATEGORIA_CLICADA)

    static marcaInicioClicada = getFromStorageUniqueValue(MARCA_INICIO_CLICADA)

    static chassiCarro = getFromStorage(CHASSI_INICIO_CLICADO)

    // method para adicionar um user (tanto no hashmap, quanto no localStorage) e então loga o user
    static addUser(user) {
        Database.users[user.email] = user
        saveToStorage(Database.users, USERS)
        Database.login(user)
    }
    
    static addAnuncio(anuncio) {
        Database.anuncios[anuncio.id] = anuncio
        saveToStorage(Database.anuncios, ANUNCIO)
    }

    static incrementAnuncioId() {
        let currentId = parseInt(localStorage.getItem(ANUNCIO_ID)) || 0
        currentId++
        localStorage.setItem(ANUNCIO_ID, currentId.toString())
        return currentId
    }

    static getAnuncioFavorito(id) {
        return Database.anuncios[id]
    }

    static setAnuncioId(id) {
        let anuncioHash = Database.anuncios[id]
        localStorage.setItem(ANUNCIO_CLICADO, JSON.stringify(anuncioHash))
    }

    static setCategoriaValor(categoria, valor) {
        localStorage.setItem(categoria, JSON.stringify(valor))
    }

    static limparCategoriaChave(categoria, variavelCategoria) {
        localStorage.removeItem(categoria)
        switch(variavelCategoria) {
            case 0:
                Database.categoriaClicada = null
                break;
            case 1:
                 Database.marcaInicioClicada = null
                    break;
            case 2:
                 Database.chassiCarro = null
                 break
        }
        
    }

    // method para buscar no hashmap. Como a chave do hashmap é o email, é só passar o email para o method que ele busca
    static findByEmail(email) {
        return Database.users[email]
    }

    // method para logar o user, basicamente adicion o objeto do user no localstorage de login
    static login(user) {
        localStorage.setItem(USER_LOGGED, JSON.stringify(user))
    }

    // retorna qual o user atual que está logado, ou seja, armazenado no localstorage de login
    static sessionUser() {
        let userData = localStorage.getItem(USER_LOGGED)
        return userData ? JSON.parse(userData) : null
    }

    // apaga todos os dados do localstorage de login, ou seja, não há mais user logado
    static logout() {
        localStorage.removeItem(USER_LOGGED)
    }
}