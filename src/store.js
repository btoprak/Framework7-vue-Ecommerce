
const store = {
  urunler: [],
  selectedUrun: undefined,
  selectedCategory: undefined,
  kategori: [],
  cart: [],
};


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, urunler) { state.inCart.push(urunler); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, urunler) { context.commit('ADD_TO_CART', urunler); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});
