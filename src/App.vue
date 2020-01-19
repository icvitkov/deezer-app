<template>
  <div id="app">
    <app-header></app-header>
    <transition name='router-animate' enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './views/Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style>
html, body{
  position: relative;
  min-height: 100%;
  font-family: 'Dosis', sans-serif;
  color: #7B8797;
  background-repeat: no-repeat;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a.router-link-exact-active {
  filter: hue-rotate(125deg);
}
</style>
