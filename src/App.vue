<template>
  <div id="app">
    <header>
      <h1 :class="$style.header">My personal costs</h1>
    </header>
    <main>
      <button @click="clicked">ADD NEW COST+</button>
      <PaymentForm @add="onDataAdded" v-show="isShowed" />
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";

export default {
  name: "App",
  components: { PaymentsList, PaymentForm },
  data() {
    return {
      isShowed: false,
      paymentsList: [
        {
          date: "13.05.2021",
          category: "Education",
          price: 123,
        },
        {
          date: "12.05.2021",
          category: "Education",
          price: 456,
        },
        {
          date: "11.05.2021",
          category: "Education",
          price: 789,
        },
        {
          date: "10.05.2021",
          category: "Education",
          price: 110,
        },
      ],
    };
  },
  methods: {
    clicked() {
      if (this.isShowed) {
        this.isShowed = false;
      } else {
        this.isShowed = true;
      }
    },
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
    show(isShowed) {
      this.isShowed = isShowed;
    },
  },
};
</script>

<style module>
.header {
  color: red;
}
</style>
