const bcrypt = require("bcryptjs");
const SECRET_KEY = process.env.SECRET_KEY || "minha_chave_secreta"

module.exports.getUsers = (app, req, res) => {
    var connection = app.config.dbConnection()
    var userModel = new app.app.models.User(connection)
    userModel.getUsers((error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: 'Erro ao procurar usuários'})
        }
        return res.json(result)
    })
}

module.exports.getUser = (app, req, res) => {
    var connection = app.config.dbConnection()
    var userModel = new app.app.models.User(connection)
    var id = req.query.id_user
    userModel.getUser(id, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: "Erro ao procurar usuário com id: " + id})
        }
        return res.json(result)
    })
}

module.exports.postUser = (app, req , res) => {
    var connection = app.config.dbConnection()
    var userModel = new app.app.models.User(connection)
    var body = req.body
    var password = bcrypt.hashSync(body.password, 8)
    userModel.postUser(body, password, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: "Erro ao criar usuário"})
        }
        const token = jwt.sign({ id: body.user_id, email: body.email}, SECRET_KEY, { expiresIn: "1h"})
        return res.json( { token })
    })
}

module.exports.deleteUser = (app, req, res) => {
    var connection = app.config.dbConnection()
    var userModel = new app.app.models.User(connection)
    var id = req.query.id_user
    userModel.deleteUser(id, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: "Erro ao deletar usuário"})
        }
        return res.json(result)
    })
}

module.exports.putUser = (app, req, res) => {
    var connection = app.config.dbConnection()
    var userModel = new app.app.models.User(connection)
    var body = req.body
    userModel.putUser(body, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: "Erro ao atualizar usuário"})
        }
        return res.json(result)
    })
}

module.exports.login = (app, req, res) => {
    var connection = app.config.dbConnection()
    var userModel = new app.app.models.User(connection)
    var email = req.body.email
    var password = bcrypt.hashSync(req.body.password, 8)
    userModel.login(email, (error, result) => {
        user = result[0]
        resultEmail = user.email
        console.log(email, resultEmail)
        resultPassword = user.password
        console.log(password, resultPassword)
        if(resultEmail != email || !bcrypt.compare(password, resultPassword)) {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }
        const token = jwt.sign({ email: user.email, password: user.password}, SECRET_KEY, { expiresIn: "1h"})
        return res.json( { token })
    })
}