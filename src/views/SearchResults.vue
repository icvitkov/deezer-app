<template>
  <div class='search'>
        <div class="results__wrapper" v-if="allArtists.length">
          <h1>Top result</h1>
          <artist-item v-for="artist in allArtists" :key="artist.id" :artist="artist"></artist-item>
        </div>
        <div class="results__wrapper" v-if="allAlbums.length">
          <div class="show__more">
            <h1>Albums</h1>
            <span v-if="isShowMoreVisible" @click="showMoreAlbums(20)" class="more">...more</span>
            <span class="more" v-if="!isShowMoreVisible" @click="showMoreAlbums(6)"> less </span>
          </div>
            <div class="albums">
               <album-item v-for="album in allAlbums" :key="album.id" :album="album"></album-item>
            </div>
        </div>
           <div class="results__wrapper" v-if="allTracks.length">
             <div class="show__more">
            <h1>Tracks</h1>
            <span v-if="isShowTracksVisable" @click="showMoreTracks(20)" class="more">...more</span>
            <span class="more" v-if="!isShowTracksVisable" @click="showMoreTracks(5)"> less  </span>
          </div>
            <playlist-item v-for="playlist in allTracks" :key="playlist.id" :playlist="playlist"></playlist-item>
          </div>
          <div class="results__wrapper error" v-if="!allAlbums.length && !allArtists.length && !allTracks.length">
            <h1>Nema rezultata</h1>
          </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArtistItem from './components/ArtistItem'
import AlbumItem from './components/AlbumItem'
import PlaylistItem from './components/PlaylistItem'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'search',
  components: {
    ArtistItem,
    AlbumItem,
    PlaylistItem
  },
  data() {
    return {
      isShowMoreVisible: true,
      isShowTracksVisable: true
    }
  },
  watch: {
    '$store.state.searchString': function() {
      // fix za bug kada nije radio search dok sam bila na searchResults ruti
      this.getData();
    }
  },
  beforeDestroy() {
    // postaviti u vuexu searchString na ''
    this.setSearchString('');
  },
  mounted() {
    if (!this.$store.state.searchString) {
      this.$router.push('/');
      return;
    }
    this.getData();
  },
  methods: {
    ...mapMutations(['setSearchString']),
    getData() {
      this.$store.dispatch('getArtists')
      this.$store.dispatch('getAlbums', 6)
      this.$store.dispatch('getTracks')
    },
    showArtist() {
      this.$router.push('/artist');
    },
    showMoreAlbums(val, func) {
      this.$store.dispatch('getAlbums', val)
      this.isShowMoreVisible = !this.isShowMoreVisible
    },
    showMoreTracks(val, func) {
      this.$store.dispatch('getTracks', val)
      this.isShowTracksVisable = !this.isShowTracksVisable
    }
  },
  computed: {
    ...mapState({
      allArtists: (state) => state.allArtists,
      allAlbums: (state) => state.allAlbums,
      allTracks: (state) => state.allTracks
    })
  }
}
</script>

<style scoped>
.search{
  width: 90%;
  margin: 0 5%;
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
  padding: 0px 10px 10px 10px;
  align-self: center;
  border-radius: 25px;
  cursor: pointer;
}

.error {
  text-align: center;
}

.albums{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
}

@media only screen and (max-width: 770px) {
  .albums{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 770px) {
  .albums{
    grid-template-columns: repeat(3, 1fr);
  }
@media only screen and (min-width: 950px) {
  .albums{
    grid-template-columns: repeat(6, 1fr);
  }
}
}

</style>
