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
    // this.$toast.error('bodyyyyyyyyyy', 'Naslov')
    this.getPlaylist()
  },
  methods: {
    async getPlaylist() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=deezer/')
      const deezerPlaylist = await response.json()
      this.deezerPlaylist = deezerPlaylist.data
      console.log(this.deezerPlaylist)
      console.log(this.deezerPlaylist.id)
    },
    showPlaylist(playlistId) {
      console.log('-', this.deezerPlaylist)
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
  padding: 20px;
  margin: 50px;
  column-gap: 25px;
  row-gap: 25px;
  }

  .playlist__item {
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
  .playlist__item:hover {
    filter: opacity(75%);
     transition: all 0.2s;
  }
  .item{
    height: 50px;
  }
  .caption{
    padding: 20px 20px 20px 50px;
  }

  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .playlist__container{
    margin: 0;
    grid-template-columns: repeat(2, auto);
    padding: 20px;
    column-gap: 25px;
    row-gap: 25px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}
</style>
