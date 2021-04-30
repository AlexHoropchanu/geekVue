<template>
  <div class="hello">
    <input
      type="text"
      v-model.number="operand1"
      placeholder="Введите число"
    /><input
      type="text"
      v-model.number="operand2"
      placeholder="Введите степень"
    /><br />
    <button @click="calc($event.target.innerText)">+</button>
    <button @click="calc($event.target.innerText)">-</button>
    <button @click="calc($event.target.innerText)">/</button
    ><button @click="calc($event.target.innerText)">*</button>
    <button @click="calc($event.target.innerText)">возвести в степень</button>
    <input type="text" v-model.number="result" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    operand1: "",
    operand2: "",
    result: 0,
  }),
  props: {
    msg: String,
  },

  methods: {
    calc(x) {
      switch (x) {
        case "+":
          this.result = this.operand1 + this.operand2;
          this.operand1 = "";
          this.operand2 = "";
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          this.operand1 = "";
          this.operand2 = "";
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          this.operand1 = "";
          this.operand2 = "";
          break;
        case "/":
          this.result = Math.ceil(this.operand1 / this.operand2);
          this.operand1 = "";
          this.operand2 = "";
          break;
        case "возвести в степень":
          this.result = Math.pow(this.operand1, this.operand2);
          this.operand1 = "";
          this.operand2 = "";
          break;
        default:
          this.result;
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
