<template>
  <div id="appheader">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/searchresults">Search</router-link>
    </div>
    <div id="search" class="search__container">
      <input
        type="text"
        class="input__field"
        @keyup.enter="getSearch"
        v-model="search"
        placeholder="Search..."
      />
    </div>
    <div @click="getSearch" class="button">
      <i class="fas fa-search"></i>
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
  width: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
}
.search__container {
  padding: 30px 0;
  display: grid;
}
input {
  border: none;
  outline: none;
}
.input__field {
  margin: 0 20px;
  /* border: 5px solid rgba(221, 231, 252, 0.623); */
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.336);
 /*  box-shadow: -10px -10px 20px 9px rgb(255, 255, 255),
    10px 10px 20px 9px #adbbd5; */
  height: 40px;
  font-size: 20px;
  padding: 0 10px;
  caret-color: rgb(100, 139, 255);
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
  background: rgba(255, 255, 255, 0.336);
 /*  border: 5px solid rgba(221, 231, 252, 0.623);
  box-shadow: -10px -10px 20px 9px rgb(255, 255, 255),
    10px 10px 20px 9px #adbbd5; */
  margin: 30px;
  justify-content: center;
  align-content: center;
  font-size: 20px;
}

.fa-search {
  opacity: 0.5;
}
</style>
