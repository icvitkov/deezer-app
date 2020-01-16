<template>
  <div class='search'>
        <div class="results__wrapper" v-if="$store.state.allArtists.length">
          <h1>Artists</h1>
            <div class="artist__box" @click="showArtist()" v-for="artist in $store.state.allArtists" :key="artist.id">
              <div class="artist__item" v-bind:style="{ 'background-image': 'url(' + artist.picture_medium + ')' }">
            </div>
              <h3>{{artist.name}}</h3>
            </div>
        </div>
        <div class="results__wrapper" v-if="$store.state.allAlbums.length">
          <h1>Albums</h1>
            <div class="albums">
               <div class="album__item" v-for="album in $store.state.allAlbums" :key="album.id">
                 <div class="album__cover">
                 <img class="album__img" :src="album.cover_medium" alt="">
                </div>
                <div class="album__details">
                  <h3>{{album.title}}</h3>
                  <p>{{album.artist.name}}</p>
                </div>
               </div>
            </div>
        </div>
           <div class="results__wrapper" v-if="$store.state.allTracks.length">
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
      artistID: ''
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

.artist__item{
  width: 100px;
  height: 100px;
  margin: 10px;
  justify-self: right;
}

.artist__box{
  display: grid;
  grid-template-columns: 150px auto;
  align-items: center;
  grid-gap: 10px;
}

.album__cover{
  display: grid;
}

.album__img{
  width: auto;
  height: auto;
}

.albums{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.results__wrapper{
  padding: 50px;
}
</style>
