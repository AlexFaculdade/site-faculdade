const USERS = "motorhub_users" // Cria a referência para salvar o objeto dos users no localStorage
const USER_LOGGED = "motorhub_user_logged" // Cria a referência para salvar o user atual logado no localStorage

// Uso de hashmap para salvar os usuários é em decorrência da sua velocidade ser O(1) para busca. 

// Busca todos os users do localStorage, se houver, converte para objeto (quando armazenado no localStorage, é armazenado
// com string) e então retorna a lista, se não houver simplesmente retorna chaves para indicar que é um hashmap
function getUsersFromStorage() {
    let userData = localStorage.getItem(USERS)
    return userData ? JSON.parse(userData) : {}
}

// Função para salvar um user no localStorage. Antes de ser salvo ele é convertido em string
function saveUsersToStorage(usersMap) {
    localStorage.setItem(USERS, JSON.stringify(usersMap))
}

class Database {
    // hashmap dos users
    static users = getUsersFromStorage() // toda vez que é chamado ele atualiza a lista de users de acordo com o localStorage
    // o que evita perde de dados quando houver reload da página

    // method para adicionar um user (tanto no hashmap, quanto no localStorage) e então loga o user
    static addUser(user) {
        Database.users[user.email] = user
        saveUsersToStorage(Database.users)
        Database.login(user)
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