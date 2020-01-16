<template>
    <div class="artist__box" @click="openArtistDetails">
        <div class="artist__item" v-bind:style="{ 'background-image': 'url(' + artist.picture_medium + ')' }"></div>
        <h3>{{artist.name}}</h3>
    </div>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  methods: {
    openArtistDetails() {
      console.log('opening artist!', this.artist)
      this.$router.push('/artist/' + this.artist.id)
    }
  }
}
</script>

<style scoped>
.artist__item {
  width: 100px;
  height: 100px;
  margin: 10px;
  justify-self: right;
}

.artist__box {
  cursor: pointer;
  display: grid;
  grid-template-columns: 150px auto;
  align-items: center;
  grid-gap: 10px;
}
</style>
