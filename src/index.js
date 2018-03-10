'use strict'
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'

import reducers from './reducers/index'
import {addToCart} from './actions/cartAction'
import booksAction from './actions/booksAction'

const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

store.dispatch(
  booksAction.postToBooks(
    [{
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
  )
)

store.dispatch(
  booksAction.updateBook({
    id: 2,
    title: 'You are a jerk!'
  })
)

store.dispatch(
  booksAction.deleteBook({
    id: 1
  })
)

store.dispatch(
  addToCart([{
    id: 2
  }])
)
