<template>
  <div>
    <h1>
      Genre
    </h1>
      <div class="genre__container">
        <div class="genre__item" v-for="genre in deezerGenre" :key="genre.id" v-bind:style="{ 'background-image': 'url(' + genre.picture_medium + ')' }">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      deezerGenre: {}
    }
  },
  mounted() {
    this.getGenre()
  },
  methods: {
    async getGenre() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=deezer')
      const deezerGenre = await response.json()
      this.deezerGenre = deezerGenre.data
      console.log(this.deezerGenre)
    }
  }
}
</script>

<style>
.home{
  text-align: left;
  }

.genre__container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background: rgb(237,247,255);
  background: linear-gradient(124deg, rgba(237,247,255,1) 33%, rgba(221,231,252,1) 92%);
  padding: 20px;
  column-gap: 20px;
  row-gap: 20px;
  }

  .genre__item {
  display: grid;
  color: #ffffff;
  text-shadow: 2px 2px 2px rgba(84,84,84,1);
  height: 50px;
  align-content: center;
  border: 7px solid rgba(221,231,252,1);
  border-radius: 50%;
  background: rgb(100,139,255);
  background: linear-gradient(124deg, rgba(100,139,255,1) 48%, rgba(133,156,229,1) 79%);
  box-shadow: -10px -10px 20px 9px rgb(255, 255, 255), 10px 10px 20px 9px #ADBBD5;
  padding: 40% 5%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  }

  .genre__item:hover {
    filter: opacity(75%);
     transition: all 0.2s;
  }

  .item{
    height: 50px;
  }
</style>
