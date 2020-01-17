<template>
    <div class="track__list">
        <div class="track__cover">
             <img class="track__img" :src="track.album.cover" alt="">
        </div>
        <p> {{track.title}}</p>
        <p> ({{track.album.title}})</p>
        <p class="end">{{ formatTime(track.duration) }}</p>
        <a :href="track.link" target='__blank' class="end"><i class="fas fa-headphones-alt"></i></a>
    </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatTime(seconds) {
      return new Date(seconds * 1000).toISOString().substr(11, 8);
    }
  }
}
</script>

<style>
.track__list{
      display: grid;
      grid-template-columns: repeat(3, max-content) auto 100px;
      column-gap: 10px;
      height: 150px;
      border-bottom: 1px solid rgba(123, 135, 151, 0.2);
      padding: 25px 20px;
      align-items: center;
      justify-items: left;
      cursor: default;
      font-size: 25px;
  }

  .track__img{
      height: auto;
      width: auto;
      align-self: center;
      justify-self: start;
      margin-right: 10px;
  }
    .track__cover{
        display: grid;
        height: 100px;
    }
    .end{
      display: grid;
      width: 100%;
      text-align: end;
      text-decoration: none;
    }
    .fa-headphones-alt{
      font-size: 40px;
      color: #7B8797;
    }
</style>
