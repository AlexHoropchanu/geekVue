<template>
    <div>
        <div :class="[$style.pagination]">
            <button @click="onClick(cur - 1)">-</button>
            <div
            @click="onClick(i)"
            v-for="i in amount" :key="i"
            :class="{[$style.active]: cur === i}"
            >{{ i }}</div>
            <button @click="onClick(cur + 1)">+</button>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    length: Number,
    n: Number,
    cur: Number
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amount) {
        // eslint-disable-next-line no-useless-return
        return
      }
      this.$emit('paginate', p)
    }
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.n)
    }
  }
}
</script>

<style lang="scss" module>
.pagination{
    display: flex;
    justify-content: center;
    & > div{
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 50%;
        &.active{
            background: green;
        }
    }
    & > div:hover{
        background: greenyellow;
    }
    & > button{
        cursor: pointer;
        border: none;
        margin: 10px;
    }
    & > button:hover{
        background: greenyellow;
    }
}
</style>
