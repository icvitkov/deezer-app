<template>
  <div>
      <track-item v-for="track in $store.state.playlistItems" :key="track.id" :track="track"></track-item>
  </div>
</template>

<script>
import TrackItem from './components/TrackItem'
export default {
  components: {
    TrackItem
  },
  mounted() {
    this.$store.dispatch('getPlaylistItems', this.$route.params.id)
  }
}
</script>

<style>

</style>
