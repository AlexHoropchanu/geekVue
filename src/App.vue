<template>
  <div id="app">
    <header>
      <h1 :class="$style.header">My personal costs</h1>
    </header>
    <main>
      <button @click="clicked">ADD NEW COST+</button>
      <PaymentForm @add="onDataAdded" v-show="isShowed" />
      <PaymentsList />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: { PaymentsList, PaymentForm },
  data() {
    return {
      paymentsList: []
    };
  },
  computed: mapState(["isShowed"]),
  methods: {
    ...mapActions(["fetchData"]),
    onDataAdded(data) {
      this.$store.commit("setDataAdded", data);
    },
    clicked() {
      this.$store.commit("setIsShowed");
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style module>
.header {
  color: red;
}
</style>
