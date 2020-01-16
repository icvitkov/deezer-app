<template>
  <div class='search'>
        <div v-if="$store.state.allArtists.length">
          <h1>Artists</h1>
            <p @click="showArtist" v-for="artist in $store.state.allArtists" :key="artist.id">{{artist.name}}</p>
        </div>
        <div v-if="$store.state.allAlbums.length">
          <h1>Albums</h1>
            <div v-for="album in $store.state.allAlbums" :key="album.id"> <h3>{{album.title}}</h3>
            <p>{{album.artist.name}}</p>
            </div>
        </div>
           <div v-if="$store.state.allTracks.length">
             <h1>Tracks</h1>
            <div v-for="track in $store.state.allTracks" :key="track.id"> <h3>{{track.title}}</h3>
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
    }
  },
  mounted() {
    this.$store.dispatch('getArtists')
    this.$store.dispatch('getAlbums')
    this.$store.dispatch('getTracks')
  },
  methods: {
    showArtist() {
      this.$router.push('/artist');
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
