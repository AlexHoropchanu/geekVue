<template>
  <div>
    <ul v-for="(item, index) in items" :key="index" :class="$style.list">
      <li :class="$style.list__link">{{ index + 1 }}</li>
      <li :class="$style.list__link">{{ item.date }}</li>
      <li :class="$style.list__link">{{ item.category }}</li>
      <li :class="$style.list__link">{{ item.price }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  methods: {
    doSomething() {
      console.log(this.items);
    },
  },
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
