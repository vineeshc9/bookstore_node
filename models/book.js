var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({

    title: {
        type: String,
        required: true

    },
    genres: {
        type: String,
        required: true
    },
    description: {
        type: String

    },
    author: {
        type: String

    },
    publisher: {
        type: String

    },
    pages: {
        type: String

    },
    image_url: {
        type: String
    },
    buy_url: {
        type: String
    },

    create_date: {
        type: Date,
        default: Date.now
    }

});

var Book = module.exports = mongoose.model('Book', bookSchema);

//get genre
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

//Add Book
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
}
