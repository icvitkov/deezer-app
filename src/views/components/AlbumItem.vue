<template>
    <div class="album__item">
      <div class="album__cover">
        <img class="album__img" :src="album.cover_medium" alt />
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
}

.album__img{
  width: auto;
  height: auto;
}

.albums{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
