<template>
  <div :class="[$style.form]">
    <input placeholder="Дата" v-model="date"/>
    <!-- <input placeholder="Категория" v-model="category"/> -->
    <select v-model="category">
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
    <input placeholder="Сумма" v-model.number="price"/>
    <button @click="save">Записать</button>
    <a href="/dashboard/add/Food?value=200">Food +200</a>
    <a href="/dashboard/add/Navigation?value=50">Navigation +50</a>
    <a href="/dashboard/add/Entertaiment?value=2000">Entertaiment +2000</a>
  </div>
</template>

<script>
const now = new Date()
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      options: ['Food', 'Navigation', 'Sport', 'Entertaiment', 'Education']
    }
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.$emit('add', { date, category, price })
    },
    save200food () {
      this.category = this.options[0]
      this.date = now.toLocaleDateString()
      this.price = 200
      this.save()
    },
    save50Navigation () {
      this.category = this.options[1]
      this.date = now.toLocaleDateString()
      this.price = 50
      this.save()
    },
    save2000Entertaiment () {
      this.category = this.options[3]
      this.date = now.toLocaleDateString()
      this.price = 2000
      this.save()
    }
  },
  mounted () {
    this.category = this.$route.params.category
    this.price = this.$route.query.value
    this.date = now.toLocaleDateString()
    console.log(this.$route)
  }
}

</script>

<style lang="scss" module>
.form{
  margin-left: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
