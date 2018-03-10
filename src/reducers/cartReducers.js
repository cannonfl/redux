'use strict'

module.exports.cartReducers = (state = {cart: []}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {cart: [...state.cart, ...action.payload]} // concat arrays using spread op; return updated state
  }
  return state
}
