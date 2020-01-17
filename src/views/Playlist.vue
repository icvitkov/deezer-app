<template>
 <div>
  <div class="track__list" v-for="playlist in $store.state.playlistItems" :key="playlist.id" :playlist='playlist'>
        <div class="track__cover">
             <img class="track__img" :src="playlist.album.cover" alt="">
        </div>
        <p> {{playlist.title}}</p>
        <p> ({{playlist.album.title}})</p>
        <p class="end">{{ formatTime(playlist.duration) }}</p>
        <a :href="playlist.link" target='__blank' class="end"><i class="fas fa-headphones-alt"></i></a>
    </div>
 </div>
</template>

<script>
export default {
  components: {
  },
  methods: {
    formatTime(seconds) {
      return new Date(seconds * 1000).toISOString().substr(11, 8);
    }
  },
  computed: {
  },
  mounted() {
    this.$store.dispatch('getPlaylistItems', this.$route.params.id)
  }
}
</script>

<style>

</style>
