const { verifyToken } = require("../../config/verifyToken")

module.exports = (app) => {
    app.get('/getBook', verifyToken, (req, res) => {
        app.app.controllers.book.getBook(app, req, res)
    })
    
    app.get('/getBooks', verifyToken, (req, res) => {
        app.app.controllers.book.getBooks(app, req, res)
    })

    app.post('/postBook', verifyToken, (req, res) => {
        app.app.controllers.book.postBook(app, req, res)
    })
    
    app.delete('/deleteBook', verifyToken, (req, res) => {
        app.app.controllers.book.deleteBook(app, req, res)
    })

    app.put('/putBook', verifyToken, (req, res) => {
        app.app.controllers.book.putBook(app, req, res)
    })

    app.get('/searchBook', verifyToken, (req, res) => {
        app.app.controllers.book.searchBook(app, req, res)
    })
}