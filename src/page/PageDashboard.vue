<template>
  <div>
      <button @click="counter += 1"
      v-show="counter == 0 && this.$route.name !== 'dashboardCategory'">Добавить расход</button>
      <PaymentForm @add="onDataAdded"
      v-show="counter >= 1 || this.$route.name === 'dashboardCategory'"/>
      <PaymentsList/>
      <div>Всего потрачено: {{ totalPrice }} рублей.</div>
  </div>
</template>

<script>
import PaymentsList from '../components/PaymentsList'
import PaymentForm from '../components/PaymentForm'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    ...mapMutations([
      'onDataAddedMutation'
    ]),
    onDataAdded (data) {
      this.onDataAddedMutation(data)
    }
  },
  mounted () {
    this.fetchData()
  },
  computed: {
    ...mapGetters([
      'getPaymentsListFullPrice'
    ]),
    totalPrice () {
      return this.getPaymentsListFullPrice
    }
  }
}
</script>

<style>

</style>
