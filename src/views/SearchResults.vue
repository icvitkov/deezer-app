<template>
  <div class='search'>
    <input type="text" v-model='search'>
    <button @click='getSearch'>Search</button>
    <div v-show="this.search">
        <p>{{search}}</p>
        <h1>Artists</h1>
          <p v-for="art in deezerArtists" :key="art.id">{{art.name}}</p>
        <h1>Albums</h1>
          <div v-for="album in deezerAlbums" :key="album.id"> <h3>{{album.title}}</h3>
          <p>{{album.artist.name}}</p>
          </div>
           <h1>Tracks</h1>
          <div v-for="track in deezerTracks" :key="track.id"> <h3>{{track.title}}</h3>
          <p>{{track.artist.name}}</p>
          </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'search',
  components: {
  },
  data() {
    return {
      deezerArtists: null,
      deezerAlbums: null,
      deezerTracks: null,
      search: ''
    }
  },
  mounted() {

  },
  methods: {
    async getArtists() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=' + this.search)
      const deezerArtists = await response.json()
      this.deezerArtists = deezerArtists.data
      console.log(this.deezerArtists)
    },
    async getAlbums() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=' + this.search)
      const deezerAlbums = await response.json()
      this.deezerAlbums = deezerAlbums.data
      console.log(this.deezerAlbums)
    },
    async getTracks() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=' + this.search)
      const deezerTracks = await response.json()
      this.deezerTracks = deezerTracks.data
      console.log(this.deezerTracks)
    },
    getSearch() {
      this.getArtists();
      this.getAlbums();
      this.getTracks();
    }
  }
}
console.log('aaa')
</script>

<style scoped>
.search{
  text-align: left;
}
</style>
