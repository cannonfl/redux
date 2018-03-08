'use strict';
import {createStore} from 'redux';

const reducer = (state={books:[]}, action) => {
  let currentBooks;
  let index = 0;
  switch(action.type) {
    case "POST_BOOK":
      return {books: [...state.books, ...action.payload] } //concat arrays using spread op; return updated state
      break;
    case "DELETE_BOOK":
      currentBooks = [...state.books];
      index = currentBooks.findIndex(book => {
        return book.id === action.payload.id;
      })
      return {books:[...currentBooks.slice(0, index),
        ...currentBooks.slice(index +1)]}
      break;
    case "UPDATE_BOOK":
      currentBooks = [...state.books];
      index = currentBooks.findIndex(book => {
        return book.id === action.payload.id;
      });
      let updateBook = currentBooks[index].title = action.payload.title;
      console.log('Book update: ', updateBook);

      return {books:[...currentBooks.slice(0, index), updateBook,
        ...currentBooks.slice(index +1)]};
      break;
  }
  return state;
}
const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state is: ', store.getState());
})

store.dispatch({
  type:"POST_BOOK",
  payload: [{
    id: 1,
    title: 'title',
    decription: 'description',
    price: 30.00
  },
  {
    id: 2,
    title: 'title 2',
    decription: 'description 2',
    price: 10.00
  }]
});
store.dispatch({
  type:"UPDATE_BOOK",
  payload: {
    id: 2,
    title: 'You are a jerk!'
  }
});
store.dispatch({
  type:"DELETE_BOOK",
  payload: {id: 1}
});
