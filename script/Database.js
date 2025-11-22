const USERS = "motorhub_users" 
const ANUNCIO = "motorhub_anuncios" 
const USER_LOGGED = "motorhub_user_logged" 
const ANUNCIO_ID = "motorhub_anuncios_id"
const ANUNCIO_CLICADO = "motorhub_anuncio_clicado"
const CATEGORIA_CLICADA = "motorhub_categoria_clicada"
const MARCA_INICIO_CLICADA = "motorhub_marca_inicio_clicada"
const CHASSI_INICIO_CLICADO = "motorhub_chassi_inicio_clicado"
function getFromStorage(key) {
    let keyData = localStorage.getItem(key)
    return keyData ? JSON.parse(keyData) : {}
}

function getFromStorageUniqueValue(key) {
     let keyData = localStorage.getItem(key)
    return keyData ? JSON.parse(keyData) : null
}

function saveToStorage(keyMap, key) {
    localStorage.setItem(key, JSON.stringify(keyMap))
}

class Database {
    static users = getFromStorage(USERS)
    static anuncios =  getFromStorage(ANUNCIO)

    static anuncioClicado = getFromStorageUniqueValue(ANUNCIO_CLICADO)

    static categoriaClicada = getFromStorageUniqueValue(CATEGORIA_CLICADA)

    static marcaInicioClicada = getFromStorageUniqueValue(MARCA_INICIO_CLICADA)

    static chassiCarro = getFromStorage(CHASSI_INICIO_CLICADO)

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

   
    static findByEmail(email) {
        return Database.users[email]
    }


    static login(user) {
        localStorage.setItem(USER_LOGGED, JSON.stringify(user))
    }


    static sessionUser() {
        let userData = localStorage.getItem(USER_LOGGED)
        return userData ? JSON.parse(userData) : null
    }


    static logout() {
        localStorage.removeItem(USER_LOGGED)
    }
}