<template>
  <div>
      <Menu/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
     Menu
  }
}
</script>

<style>
  body{
      padding: 0;
      margin: 0;
      font-family: Helvetica, sans-serif;
      background-color: #f5f5f5;
  }
</style>
