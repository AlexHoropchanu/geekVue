<template>
  <div id="app">
    <header :class="[$style.header]">
      <router-link to="dashboard">Приложение "Мои расходы"</router-link>
      <router-link to="about">О приложении</router-link>
      <router-link to="404">404</router-link>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  },
  computed: {
  }
}
</script>

<style lang="scss" module>
.header{
  color: greenyellow;
  background: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 50px;
  & > a{
    color: greenyellow;
  }
}
.form{
  margin-left: 20px;
}
</style>
