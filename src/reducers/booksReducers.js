'use strict'

module.exports.booksReducers = (state = {books: []}, action) => {
  let currentBooks
  let index = 0
  switch (action.type) {
    case 'POST_BOOK':
      return {books: [...state.books, ...action.payload]} // concat arrays using spread op; return updated state
    case 'DELETE_BOOK':
      currentBooks = [...state.books]
      index = currentBooks.findIndex(book => {
        return book.id === action.payload.id
      })
      return {books: [...currentBooks.slice(0, index),
        ...currentBooks.slice(index + 1)]}
    case 'UPDATE_BOOK':
      currentBooks = [...state.books]
      index = currentBooks.findIndex(book => {
        return book.id === action.payload.id
      })
      let updateBook = currentBooks[index].title = action.payload.title
      return {books: [...currentBooks.slice(0, index), updateBook,
        ...currentBooks.slice(index + 1)]}
  }
  return state
}
