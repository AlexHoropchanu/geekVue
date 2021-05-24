<template>
  <div>
    <ul
      v-for="(item, index) in getPaymentsList"
      :key="index"
      :class="$style.list"
    >
      <li :class="$style.list__link">{{ index + 1 }}</li>
      <li :class="$style.list__link">{{ item.date }}</li>
      <li :class="$style.list__link">{{ item.category }}</li>
      <li :class="$style.list__link">{{ item.price }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {},
  methods: {
    doSomething() {
      console.log(this.items);
    }
  },
  computed: {
    ...mapGetters(["getPaymentsList"])
  }
};
</script>

<style module>
.list {
  display: flex;
  list-style-type: none;
}
.list__link {
  margin-right: 100px;
}
</style>
