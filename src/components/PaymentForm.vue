<template>
  <div>
    <div>
      <input placeholder="Date" v-model="date" />
      <input placeholder="Category" v-model="category" />
      <input placeholder="Price" v-model.number="price" />
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      date: "",
      category: "",
      price: 0
    };
  },
  props: {},
  // computed:{
  //   ...mapState(['paymentslist'])
  // }
  // computed: {
  //   ...mapGetters(["getPaymentsListFullPrice"]), //специальный метод vuex который позволяет использовать geter из стора
  // },
  methods: {
    save() {
      if (this.date && this.category) {
        const { date, category, price } = this;
        this.$emit("add", { date, category, price });
        this.date = "";
        this.category = "";
        this.price = 0;
      }
    }

    // ...mapMutations(["setPaymentsListData"]), //cпециальный метод vuex которые принимает даные со стейта которые мы хотим изменить и позволяет в компоненте работать с даными на прямую

    // fetchData() {
    //   return [
    //     {
    //       date: "13.05.2021",
    //       category: "Education",
    //       price: 123,
    //     },
    //     {
    //       date: "12.05.2021",
    //       category: "Education",
    //       price: 456,
    //     },
    //     {
    //       date: "11.05.2021",
    //       category: "Education",
    //       price: 789,
    //     },
    //     {
    //       date: "10.05.2021",
    //       category: "Education",
    //       price: 110,
    //     },
    //   ];
    // },
  }
  // mounted() {
  //   this.$store.commit("setPaymentsListData", this.fetchData()); //this.$store обращение к стору vuex .commit служит для передачи в стор и принимает 2 параметра 1 название функции мутации 2 даные которые нужно засетатьь в стор
  // },
  // mounted() {
  //   this.setPaymentsListData(this.fetchData());
  // },
};
</script>

<style></style>
