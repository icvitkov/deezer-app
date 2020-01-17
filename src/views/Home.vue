<template>
  <div>
    <div class="caption">
      <h1>Recommended by Deezer's editors</h1>
    </div>
      <div class="genre__container">
        <div @click="getPlaylist" class="genre__item" v-for="genre in deezerGenre" :key="genre.id" v-bind:style="{ 'background-image': 'url(' + genre.picture_medium + ')' }">
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
    },
    getPlaylist() {
      this.$router.push('/playlist/')
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
  grid-template-columns: repeat(5, auto);
  padding: 20px;
  column-gap: 25px;
  row-gap: 25px;
  }

  .genre__item {
  display: grid;
  width: 90%;
  height: 0;
  padding-bottom: 90%;
  align-content: center;
  /* border: 7px solid rgba(221,231,252,1); */
  border-radius: 50%;
  /* background: rgb(100,139,255);
  background: linear-gradient(124deg, rgba(100,139,255,1) 48%, rgba(133,156,229,1) 79%);
  box-shadow: -10px -10px 20px 9px rgb(255, 255, 255), 10px 10px 20px 9px #ADBBD5; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  }
  .genre__item:hover {
    filter: opacity(75%);
     transition: all 0.2s;
  }
  .item{
    height: 50px;
  }
  .caption{
    padding: 20px 20px 20px 50px;
  }
</style>
