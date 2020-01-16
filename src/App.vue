<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style>
body{
  background: rgb(237,247,255);
  background: linear-gradient(124deg, rgba(237,247,255,1) 33%, rgba(221,231,252,1) 92%);
  font-family: 'Dosis', sans-serif;
  color: #7B8797;
  background-repeat: no-repeat;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
