<template>
   <div>
  <div class="banner" v-bind:style="{ 'background-image': 'url(' + banner + ')' }"></div>
   <div class="playlist">
  <h1> {{playlistTitle}} </h1>
    <playlist-item v-for="playlist in playlistitems" :key="playlist.id" :playlist='playlist'>
    </playlist-item>
   </div>
   </div>
</template>

<script>
import PlaylistItem from '../views/components/PlaylistItem'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    PlaylistItem
  },
  methods: {
    formatTime(seconds) {
      return new Date(seconds * 1000).toISOString().substr(11, 8);
    },
    cutString(str, val) {
      if (str.length > val) {
        return str.substr(0, val) + '...'
      } else {
        return str
      }
    }
  },
  computed: {
    ...mapState({
      playlistitemsAll: (state) => state.playlistItems,
      banner: (state) => state.banner,
      playlistTitle: (state) => state.playlistTitle
    }),
    ...mapGetters({
      playlistitems: 'filterExplicit'
    })
  },
  mounted() {
    this.$store.dispatch('getPlaylistItems', this.$route.params.id)
  }
}
</script>

<style scoped>

  .playlist{
    width: 90%;
    margin: 0 5%;
  }
  .banner{
    height: 0;
    width: 100%;
    padding-bottom: 30%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
