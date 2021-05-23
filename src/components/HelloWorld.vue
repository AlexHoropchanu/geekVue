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
    <input type="text" v-model.number="result" /><br />
    <input type="checkbox" v-model="checked" /><br />
    <button
      v-show="checked"
      v-for="key of keyboard"
      :key="key"
      @click="operand($event.target.innerText)"
    >
      {{ key }}
    </button>
    <button v-show="checked">del</button><br />
    <label>
      <input type="radio" value="1" v-model="checkedOperand" />
      <span>operand1</span>
      <input type="radio" value="2" v-model="checkedOperand" />
      <span>operand2</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    operand1: "",
    operand2: "",
    checkedOperand: false,
    result: 0,
    checked: "",
    keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
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
    operand(event) {
      if (this.checkedOperand == 1) {
        this.operand1 = event;
        this.checked1 = "";
      } else if (this.checkedOperand == 2) {
        this.operand2 = event;
        this.checked2 = "";
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
