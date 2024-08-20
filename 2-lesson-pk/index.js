const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.log(err);
});

const Author = mongoose.model("Author", new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
}))

const Book = mongoose.model("Book", new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
}))

async function createAuthor(firstName, lastName, email) {
    const author = new Author({
        firstName: firstName,
        lastName: lastName,
        email: email
    });
    const result = await author.save();
    console.log(result);
}

async function createBook(title, authorId) { 
    const book = new Book({
        title: title,
        author: authorId
    });
    const result = await book.save();
    console.log(result);
}


async function listBook() {
    const books = await Book
    .find()
    .populate("author", 'lastName -_id')
    .select("title author");
    console.log(books);
}

// createAuthor("John", "Doe", "jdoe@me.com");
// createBook("War and Peace", "66c47d646d9d6e296b1cf127");
listBook();