function Book(connection) {
    this._connection = connection
}

Book.prototype.getBook = function(id, callback) {
    this._connection.query('SELECT * FROM books WHERE id_book = ?', [id], callback)
}

Book.prototype.getBooks = function(callback){
    this._connection.query('SELECT * FROM books', callback)
}

Book.prototype.postBook = function(body, callback) {
    const values = [body.book_picture, body.book_name, body.book_description, body.book_author, body.book_date, body.book_publisher, body.pdf_link]
    this._connection.query(
        'INSERT INTO books(book_picture, book_name, book_description, book_author, book_date, book_publisher, pdf_link) VALUES(?, ?, ?, ?, ?, ?, ?)',
        values, 
        callback
    )
}

Book.prototype.deleteBook = function(id, callback) {
    this._connection.query('DELETE FROM books WHERE id_book = ?',[id], callback)
}

Book.prototype.putBook = function(body, callback) {
    const values = [body.book_picture, body.book_name, body.book_description, body.book_author, body.book_date, body.book_publisher, body.pdf_link, body.id_book]
    this._connection.query(
        'UPDATE books SET book_picture = ?, book_name = ?, book_description = ?, book_author = ?, book_date = ?, book_publisher = ?, pdf_link = ? WHERE id_book = ?', 
        values, 
        callback
    )
}

module.exports = () => {
    return Book
}