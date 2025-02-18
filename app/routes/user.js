const { verifyToken } = require("../../config/verifyToken")

module.exports = (app) => {
    app.get('/getUsers', verifyToken, (req, res) => {
        app.app.controllers.user.getUsers(app, req, res)
    })

    app.get('/getUser', verifyToken, (req, res) => {
        app.app.controllers.user.getUser(app, req, res)
    })

    app.post('/postUser', (req, res) => {
        app.app.controllers.user.postUser(app, req, res)
    })

    app.delete('/deleteUser', verifyToken, (req, res) => {
        app.app.controllers.user.deleteUser(app, req, res)
    })

    app.put('/putUser', verifyToken, (req, res) => {
        app.app.controllers.user.putUser(app, req, res)
    })

    app.post('/login', (req, res) => {
        app.app.controllers.user.login(app, req, res)
    })
}