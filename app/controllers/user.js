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
    userModel.postUser(body, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: "Erro ao criar usuário"})
        }
        return res.json(result)
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