'use strict'

module.exports.addToCart = (book) => {
  return {
    type: 'ADD_TO_CART',
    payload: book
  }
}
