<template>
  <div id=artist>
      <div class="artist__container">
        <div class="artist__item" v-bind:style="{ 'background-image': 'url(' + artist.picture_medium + ')' }">
      </div>
    <div class="info">
      <h1>{{artist.name}}</h1>
      <p>Obožavatelji: {{artist.nb_fan}}</p>
      <p>Broj albuma: {{artist.nb_album}}</p>
    </div>
    </div>
    <h2>Top tracks by {{artist.name}}</h2>
    <track-item v-for="track in artistPlaylist" :key="track.id" :track="track"></track-item>
  </div>
</template>

<script>
import TrackItem from '../views/components/TrackItem'
import { mapState } from 'vuex'
export default {
  name: 'artist',
  components: {
    TrackItem
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      artist: (state) => state.artist,
      artistPlaylist: (state) => state.artistPlaylist
    })
  },
  mounted() {
    this.$store.dispatch('getArtistSingle', this.$route.params.id)
    this.$store.dispatch('getArtistPlaylist', this.$route.params.id)
  },
  methods: {
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
    align-items: center;
    grid-template-columns: 300px auto;
    grid-gap: 20px;
  }

  .artist__item {
  display: grid;
  height: 300px;
  width: 300px;
  align-content: center;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  }

  .info p {
    font-size: 25px;
  }

  @media only screen and (max-width: 600px) {
     .artist__item{
       height: 100px;
       width: 100px;
     }
     .artist__container{
       grid-template-columns: 100px auto;
     }
     .info p {
       font-size: 14px;
     }
   }
    @media only screen and (min-width: 600px) {
      .artist__item{
       height: 200px;
       width: 200px;
     }
     .artist__container{
       grid-template-columns: 200px auto;
     }
     .info p {
       font-size: 18px;
     }
    }
    @media only screen and (min-width:950px) {
       .artist__item{
       height: 300px;
       width: 300px;
     }
     .artist__container{
       grid-template-columns: 300px auto;
     }
     .info p {
       font-size: 25px;
     }
   }
</style>
