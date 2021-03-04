// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  let booksn = books.map((x) => x + 0);
  return booksn.length;
}

function getTotalAccountsCount(accounts) {
  accounts.reduce((tally, items) => {
    if (!tally[items]) {
      tally[items] = 1;
    } else {
      tally[items] = tally[items] + 1;
    }
    return tally;
  }, []);
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let counter = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      counter++;
    }
  });
  return counter;
}

function getMostCommonGenres(books) {
  let mostBook = [];
  let reduced = groupBy(books, "genre");
  for(let key in reduced){
    mostBook.push({name: key, count: reduced[key].length})
  }
  return getTop5(mostBook);
}

function getMostPopularBooks(books) {
  let mostPop = books.map((book) => {
      return({ name: book.title, count: book.borrows.length });})

  return getTop5(mostPop);
}

function getMostPopularAuthors(books, authors) {
  let mostPop = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      if(author.id === book.authorId){
        mostPop.push({name: `${author.name.first} ${author.name.last}`, count: book.borrows.length});
      }
    })
    // worthless code that used to be integral because i thought we were supposed to combine names so that there wasn't any repeats of authors
      /*!mostPop.some(
        (e) => e.name === `${author.name.first} ${author.name.last}`
      )
    ) {
      mostPop.push({
        name: `${author.name.first} ${author.name.last}`,
        count: 0,
      });
    }*/
  });
  /*
  mostPop.forEach((e) => {
    authors.forEach((author) => {
      if (e.name === `${author.name.first} ${author.name.last}`) {
        books.forEach((book) => {
          if (author.id === book.authorId) {
            e.count += book.borrows.length;
          }
        });
      }
    });
  });
  */
  return getTop5(mostPop);
}

function getTop5(array) {
  array.sort((itemA, itemB) => (itemA.count < itemB.count ? 1 : -1));
  array.splice(5);
  return array;
}

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, [])
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
