// import { reject } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    onDataAddedMutation (state, data) {
      state.paymentsList.push(data)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.price, 0)
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { date: '20.03.2020', category: 'Food', price: 169 },
            { date: '21.03.2020', category: 'Navigation', price: 50 },
            { date: '22.03.2020', category: 'Sport', price: 450 },
            { date: '23.03.2020', category: 'Entertaiment', price: 969 },
            { date: '24.03.2020', category: 'Education', price: 1500 },
            { date: '25.03.2020', category: 'Food', price: 200 },
            { date: '20.03.2020', category: 'Food', price: 169 },
            { date: '21.03.2020', category: 'Navigation', price: 50 },
            { date: '22.03.2020', category: 'Sport', price: 450 },
            { date: '23.03.2020', category: 'Entertaiment', price: 969 },
            { date: '24.03.2020', category: 'Education', price: 1500 },
            { date: '25.03.2020', category: 'Food', price: 200 },
            { date: '20.03.2020', category: 'Food', price: 169 },
            { date: '21.03.2020', category: 'Navigation', price: 50 },
            { date: '22.03.2020', category: 'Sport', price: 450 },
            { date: '23.03.2020', category: 'Entertaiment', price: 969 },
            { date: '24.03.2020', category: 'Education', price: 1500 },
            { date: '25.03.2020', category: 'Food', price: 200 }
          ]
          )
        }, 2000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    }
  }
})
