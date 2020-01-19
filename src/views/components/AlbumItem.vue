<template>
    <div class="album__item">
      <div class="album__cover">
        <img class="album__img" :src="album.cover_medium" :alt='album.title' />
      </div>
      <div class="album__details">
        <h3>{{album.title}}</h3>
        <p>{{album.artist.name}}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.album__cover{
  display: grid;
  height: max-content;
}

.album__img{
  width: 100%;
  min-height: 100%;
  height: 0;
  padding-bottom: 100%;
}

.album__item{
  display: grid;
  height: max-content;
}

</style>
