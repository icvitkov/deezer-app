<template>
  <div id="appheader">
    <div id="nav" class="logo__container">
      <router-link to="/"><img class="logo" alt="Deezer" src="../assets/deezer.png"></router-link>
    </div>
    <div id="search" class="search__container">
      <div class="input__field">
        <input
          type="text"
          @keyup.enter="getSearch"
          v-model="search"
          placeholder="Search..."
        />
    <div @click="getSearch" class="button">
      <i class="fas fa-search"></i>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appheader',
  data() {
    return {
      search: ''
    };
  },
  watch: {
    '$store.state.searchString': function(newVal) {
      if (newVal === '') {
        this.search = ''
      }
    }
  },

  methods: {
    getSearch() {
      this.$store.commit('setSearchString', this.search);
      const path = `/searchresults`;
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    }
  }
};
</script>

<style scoped>
#appheader {
  height: 100px;
  width: 90%;
  margin: 0 5%;
  display: grid;
  grid-template-columns: min-content auto;
  column-gap: 5%;
}
.search__container {
  padding: 30px 0;
  display: grid;
}
input {
  border: none;
  outline: none;
  background: transparent;
  height: 40px;
  font-size: 20px;
  width: 100%;
}
.input__field {
  border-radius: 25px;
  background: transparent;
  box-shadow: inset 7px 10px 15px -17px rgba(173,173,173,1),  inset -7px -10px 18px -12px rgb(237, 252, 253);
  height: 40px;
  padding: 0 10px;
  caret-color: rgb(100, 139, 255);
  display: grid;
  grid-template-columns: auto min-content;
}

::placeholder {
  opacity: 0.5;
}

input::selection {
  background: rgb(100, 139, 255);
  color: #fff;
}

.button {
  display: grid;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  justify-content: end;
  align-content: center;
  font-size: 20px;
}

.fa-search {
  opacity: 0.5;
}

.logo {
  height: 70px;
}

.logo__container{
  align-self: center;
}

@media only screen and (max-width: 600px) {
  .logo {
  height: 50px;
}
}
</style>
