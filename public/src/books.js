// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let finder = authors.find((author) => {
    if(author.id === id){
      return author;
    }
  })
return finder;
}

function findBookById(books, id) {
  let finder = books.find((author) => {
    if(author.id === id){
      return author;
    }
  })
return finder;
}

function partitionBooksByBorrowedStatus(books) {
  let allBooks = [];
  let returned =[];
  let borrowed = [];
  books.forEach((book) => {
    book.borrows[0].returned? returned.push(book):borrowed.push(book);
  })
  allBooks.push(borrowed, returned);
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  booksies = []
  accounts.forEach((acc) => {
    book.borrows.forEach((borrow) => {
      if(acc.id === borrow.id)
      acc.returned = borrow.returned;
    })
    if(acc.returned){
    booksies.push(acc);
  }});
  booksies.length = 10;
  return booksies;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
