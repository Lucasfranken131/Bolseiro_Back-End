module.exports = (app) => {
    app.get('/getUsers', (req, res) => {
        app.app.controllers.user.getUsers(app, req, res)
    })

    app.get('/getUser', (req, res) => {
        app.app.controllers.user.getUser(app, req, res)
    })

    app.post('/postUser', (req, res) => {
        app.app.controllers.user.postUser(app, req, res)
    })

    app.delete('/deleteUser', (req, res) => {
        app.app.controllers.user.deleteUser(app, req, res)
    })

    app.put('/putUser', (req, res) => {
        app.app.controllers.user.putUser(app, req, res)
    })
}