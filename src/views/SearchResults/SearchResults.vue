<template>
  <div class='search'>
        <div class="results__wrapper" v-if="$store.state.allArtists.length">
          <h1>Top result</h1>
          <artist-item v-for="artist in $store.state.allArtists" :key="artist.id" :artist="artist"></artist-item>
        </div>
        <div class="results__wrapper" v-if="$store.state.allAlbums.length">
          <div class="show__more">
            <h1>Albums</h1>
            <span @click="showMore(20)" class="more">...more</span>
          </div>
            <div class="albums">
               <album-item class="album__item" v-for="album in $store.state.allAlbums" :key="album.id" :album="album"></album-item>
            </div>
        </div>
           <div class="results__wrapper" v-if="$store.state.allTracks.length">
             <h1>Tracks</h1>
            <track-item v-for="track in $store.state.allTracks" :key="track.id" :track="track"></track-item>
          </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArtistItem from './searchComponents/ArtistItem'
import TrackItem from '../components/TrackItem'
import AlbumItem from '../components/AlbumItem'

export default {
  name: 'search',
  components: {
    ArtistItem,
    TrackItem,
    AlbumItem
  },
  data() {
    return {
      artistID: ''
    }
  },
  mounted() {
    if (!this.$store.state.searchString) {
      this.$router.push('/');
      return;
    }
    this.$store.dispatch('getArtists')
    this.$store.dispatch('getAlbums', 6)
    this.$store.dispatch('getTracks')
  },
  methods: {
    showArtist() {
      this.$router.push('/artist');
    },
    showMore(val) {
      this.$store.dispatch('getAlbums', val)
    }
  }
}
</script>

<style scoped>
.search{
  text-align: left;
}
.show__more{
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 20px;
}
.more{
  background: rgba(123, 135, 151, 0.5);
  color: rgb(255, 255, 255);
  font-size: 20px;
  height: 20px;
  padding: 0px 5px 10px 5px;
  align-self: center;
  border-radius: 25px;
  cursor: pointer;
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
