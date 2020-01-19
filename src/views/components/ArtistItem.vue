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
      this.$router.push('/artist/' + this.artist.id)
    }
  }
}
</script>

<style scoped>

.artist__box {
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  grid-gap: 10px;
}
</style>
