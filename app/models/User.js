function User(connection) {
    this._connection = connection
}

User.prototype.getUser = function(id, callback) {
    this._connection.query('SELECT * FROM users WHERE id_user = ?', [id], callback)
}

User.prototype.getUsers = function(callback) {
    this._connection.query('SELECT * FROM users', callback)
}

User.prototype.postUser = function(body, password, callback) {
    const values = [body.profile_picture, body.first_name, body.last_name, body.username, body.email, password, body.is_admin]
    this._connection.query(`INSERT INTO users(profile_picture, first_name, last_name, username, email, password, is_admin) VALUES(?, ?, ?, ?, ?, ?, ?)`, values, callback)
}

User.prototype.deleteUser = function(id, callback) {
    this._connection.query('DELETE FROM users WHERE id_user = ?', [id], callback)
}

User.prototype.putUser = function(body, callback) {
    const values = [body.profile_picture, body.first_name, body.last_name, body.username, body.email, body.password, body.is_admin, body.id_user]
    this._connection.query('ALTER users SET profile_picture = ?, first_name = ?, last_name = ?, username = ?, email = ?, password = ?, is_admin = ? WHERE id_user = ?', values, callback)
}

User.prototype.login = function(email, callback) {
    this._connection.query('SELECT * FROM users WHERE email = ?', [email], callback)
}

module.exports = () => {
    return User
}