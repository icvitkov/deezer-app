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
            <track-item v-for="track in allTracks" :key="track.id" :track="track"></track-item>
          </div>
          <div class="results__wrapper error" v-if="!allAlbums.length && !allArtists.length && !allTracks.length">
            <h1>Nema rezultata</h1>
          </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArtistItem from './searchComponents/ArtistItem'
import TrackItem from '../components/TrackItem'
import AlbumItem from '../components/AlbumItem'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'search',
  components: {
    ArtistItem,
    TrackItem,
    AlbumItem
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
    console.log('destroy')
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
  position: relative;
  text-align: left;
  width: 100%;
  height: 100%;
  display: grid;
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
.results__wrapper{
  padding: 50px;
}
.error {
  text-align: center;
}

</style>
