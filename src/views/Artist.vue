<template>
  <div id=artist>
      <div class="artist__container">
        <div class="artist__item" v-bind:style="{ 'background-image': 'url(' + artist.picture_medium + ')' }">
      </div>
    <div class="caption">
      <h1>{{artist.name}}</h1>
      <h3>Obožavatelji: {{artist.nb_fan}}</h3>
      <h3>Broj albuma: {{artist.nb_album}}</h3>
    </div>
    </div>
        <div v-for="track in $store.state.artistPlaylist" :key="track.id" class="track">
           <div class="cover">
               <img class="img" :src="track.album.cover" alt="">
           </div>
           <p> {{track.title}}</p>
           <p>-  {{track.album.title}}</p>
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'artist',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      artist: (state) => state.artist
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
    grid-template-columns: 20% 80%;
    grid-gap: 20px;
    padding: 20px 20px;
    margin: 50px;
  }

  .artist__item {
  display: grid;
  height: 300px;
  width: 300px;
  align-content: center;
  border: 7px solid rgba(221,231,252,1);
  border-radius: 50%;
  box-shadow: -10px -10px 20px 9px rgb(255, 255, 255), 10px 10px 20px 9px #ADBBD5;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  }

  .track{
      display: grid;
      grid-template-columns: repeat(3, max-content);
      grid-gap: 10px;
      line-height: 50px;
      border-bottom: 1px solid rgba(123, 135, 151, 0.2);
      padding: 0 20px;
      align-content: center;
      cursor:default;
  }

  .img{
      height: 50px;
      width: auto;
      align-self: center;
      justify-self: start;
      margin-right: 10px;
  }
    .cover{
        display: grid;
    }
</style>
