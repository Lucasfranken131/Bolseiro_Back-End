module.exports = (app) => {
    app.get('/getBook', (req, res) => {
        app.app.controllers.book.getBook(app, req, res)
    })
    
    app.get('/getBooks', (req, res) => {
        app.app.controllers.book.getBooks(app, req, res)
    })

    app.post('/postBook', (req, res) => {
        app.app.controllers.book.postBook(app, req, res)
    })
    
    app.delete('/deleteBook', (req, res) => {
        app.app.controllers.book.deleteBook(app, req, res)
    })

    app.put('/putBook', (req, res) => {
        app.app.controllers.book.putBook(app, req, res)
    })
}