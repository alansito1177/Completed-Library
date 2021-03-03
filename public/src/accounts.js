// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let account = accounts.find((acc) => {
    if (acc.id === id) return acc;
  });
  return account;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accA, accB) => {
    return accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1;
  });
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  books.filter((book) => {
    for (let borrow of book.borrows) {
      if (borrow.id === account.id) {
        counter++;
      }
    }
  });
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  let acBooks = books.filter((book) => {
    for (let borrow of book.borrows) {
      if (borrow.id === account.id && borrow.returned === false) {
        return book;
      }
    }
  });
  acBooks.forEach((element) => {
    for (let author of authors) {
      if (author.id === element.authorId) {
        element.author = author;
        //console.log(element);
      }
    }
  });
  return (acBooks);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
