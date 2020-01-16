<template>
  <div id=artist>
      <div class="artist__container">
        <div class="artist__item" v-bind:style="{ 'background-image': 'url(' + deezerArtist.picture_medium + ')' }">
      </div>
    <div class="caption">
      <h1>{{deezerArtist.name}}</h1>
      <h3>Obožavatelji: {{deezerArtist.nb_fan}}</h3>
      <h3>Broj albuma: {{deezerArtist.nb_album}}</h3>
    </div>
    </div>
        <div v-for="track in deezerArtistPlaylist" :key="track.id" class="track">
           <div class="cover">
               <img class="img" :src="track.album.cover" alt="">
           </div>
           <p> {{track.title}} </p>
           <p>{{track.album.title}}</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'artist',
  components: {
  },
  data() {
    return {
      deezerArtist: {},
      deezerArtistPlaylist: {}
    }
  },
  mounted() {
    this.getArtist()
    this.getArtistPlaylist()
  },
  methods: {
    async getArtist() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/931')
      const deezerArtist = await response.json()
      this.deezerArtist = deezerArtist
      console.log(this.deezerArtist)
    },
    async getArtistPlaylist() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/931/top?limit=15')
      const deezerArtistPlaylist = await response.json()
      this.deezerArtistPlaylist = deezerArtistPlaylist.data
      console.log(this.deezerArtistPlaylist)
    }

  }
}
</script>

<style>

#artist{
    width: 80%;
    margin: 0 10%;
}

.artist__container {
    display: grid;
    justify-content: center;
    grid-template-columns: 20% 80%;
    grid-gap: 20px;
    padding: 20px 20px;
    margin: 50px;
  }

  .artist__item {
  display: grid;
  color: #ffffff;
  text-shadow: 2px 2px 2px rgba(84,84,84,1);
  height: 300px;
  width: 300px;
  align-content: center;
  border: 7px solid rgba(221,231,252,1);
  border-radius: 50%;
  box-shadow: -10px -10px 20px 9px rgb(255, 255, 255), 10px 10px 20px 9px #ADBBD5;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  }

  .track{
      display: grid;
      grid-template-columns: repeat(3, max-content);
      line-height: 50px;
      border-bottom: 1px solid rgba(123, 135, 151, 0.2);
      padding: 0 20px;
      align-content: center;
      cursor:default;
  }

  .img{
      height: 50px;
      width: auto;
      align-self: center;
      justify-self: start;
      margin-right: 10px;
  }
    .cover{
        display: grid;
    }
</style>
