// import { reject } from "core-js/fn/promise";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//Vuex - он же BLL уровень
export default new Vuex.Store({
  //state:{}(Даные приложения он же стейт (типа редакс стейт)(придерживается подхода Flux так же как реакт))
  state: {
    isShowed: false,
    paymentsList: []
  },
  // mutations Функции для изменения состояния (типа dispatch у редакс )
  mutations: {
    // payload - данные которые изменяют стейт
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    setDataAdded(state, payload) {
      state.paymentsList.push(payload);
    },
    setIsShowed(state) {
      if (state.isShowed) {
        state.isShowed = false;
      } else {
        state.isShowed = true;
      }
    }
  },
  // getters фнукции которые получают данные из стейста и вызываются в компоненте
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.price, 0);
    }
  },
  // actions для обращения на сервер (получаем обьект (action) и потом его передаем в мутации)
  // так же может содержать бизнес логику приложения, но не может менять состояние
  // функции экшинс являются асинхронными
  actions: {
    fetchData({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              date: "13.05.2021",
              category: "Education",
              price: 123
            },
            {
              date: "12.05.2021",
              category: "Education",
              price: 456
            },
            {
              date: "11.05.2021",
              category: "Education",
              price: 789
            },
            {
              date: "10.05.2021",
              category: "Education",
              price: 110
            }
          ]);
        }, 2000);
      }).then(data => {
        commit("setPaymentsListData", data);
      });
    }
  }
});
