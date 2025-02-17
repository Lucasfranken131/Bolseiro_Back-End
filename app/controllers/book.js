module.exports.getBook = (app, req, res) => {
    var connection = app.config.dbConnection()
    var bookModel = new app.app.models.Book(connection)
    var id_book = req.query.id_book
    bookModel.getBook(id_book, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({ erro: 'Deu erro filhão'})
        }
        return res.json(result)
    })
}

module.exports.getBooks = (app, req, res) => {
    var connection = app.config.dbConnection()
    var bookModel = new app.app.models.Book(connection)
    bookModel.getBooks((error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: 'Erro ao buscar o livro'})
        }
        return res.json(result)
    })
}

module.exports.postBook = (app, req, res) => {
    var connection = app.config.dbConnection()
    var bookModel = new app.app.models.Book(connection)
    var body = req.body
    bookModel.postBook(body, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({ error: 'Deu problema'})
        }
        return res.json(result)
    })
}

module.exports.deleteBook = (app, req, res) => {
    var connection = app.config.dbConnection()
    var bookModel = new app.app.models.Book(connection)
    var id_book = req.query.id_book
    bookModel.deleteBook(id_book, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: "Não foi possível deletar o livro"})
        }
        return res.json(result)
    })
}

module.exports.putBook = (app, req, res) => {
    var connection = app.config.dbConnection()
    var bookModel = new app.app.models.Book(connection)
    var body = req.body
    bookModel.putBook(body, (error, result) => {
        if(error) {
            console.log(error)
            return res.status(500).json({error: "Erro ao atualizar livro"})
        }
        return res.json(result)
    })
}