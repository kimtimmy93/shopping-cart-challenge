import { createStore } from 'vuex'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product => {
      const productItem = state.cart.find(i => i.title === product.title);
      
      if (productItem) return productItem.quantity
      else return null
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0);
    }
  },
  mutations: {
    addItemToCart(state, product) {
      let productItem = state.cart.find(i => i.title === product.title);

      if (productItem) {
        productItem.quantity++;
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        });
      }

      updateLocalStorage(state.cart);
    },
    removeItemsFromCart(state, product) {
      let productItem = state.cart.find(i => i.title === product.title);

      if (productItem) {
        productItem.quantity = 0;
        updateLocalStorage(state.cart);
      }
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart');
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
