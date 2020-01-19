<template>
  <div>
    <div class="caption">
      <h1>Recommended by Deezer's editors</h1>
    </div>
      <div class="playlist__container">
        <div class="playlist__item" v-for="playlist in deezerPlaylist" :key="playlist.id" v-bind:style="{ 'background-image': 'url(' + playlist.picture_medium + ')' }"  @click="showPlaylist(playlist.id)">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      deezerPlaylist: {}
    }
  },
  mounted() {
    this.getPlaylist()
  },
  methods: {
    async getPlaylist() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=deezer/')
      const deezerPlaylist = await response.json()
      this.deezerPlaylist = deezerPlaylist.data
    },
    showPlaylist(playlistId) {
      this.$router.push('/playlist/' + playlistId)
      this.$router.push('/playlist/' + playlistId)
    }

  }
}
</script>

<style>
.home{
  text-align: left;
  }

.playlist__container {
  display: grid;
  grid-template-columns: repeat(5, auto);
  width: 90%;
  margin: 0 5%;
  column-gap: 25px;
  row-gap: 25px;
  }

  .playlist__item {
  display: grid;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  align-content: center;
  justify-self: center;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  }
  .playlist__item:hover {
    filter: opacity(75%);
     transition: all 0.2s;
  }
  .item{
    height: 50px;
  }
  .caption{
    width: 90%;
    margin: 0 5%;
  }

@media only screen and (max-width: 600px) {
  .playlist__container{
    grid-template-columns: repeat(2, auto);
    column-gap: 25px;
    row-gap: 25px;
  }
}
@media only screen and (min-width: 600px) {
  .playlist__container {
    grid-template-columns: repeat(3, auto);
  }
}

@media only screen and (min-width: 950px){
  .playlist__container {
    grid-template-columns: repeat(4, auto);
  }
}

@media only screen and (min-width: 1200px) {
   .playlist__container {
    grid-template-columns: repeat(5, auto);
  }
}
</style>
