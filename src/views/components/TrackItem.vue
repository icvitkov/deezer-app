<template>
    <div class="track__wrapper">
        <div class="track__cover">
             <img class="track__img" :src="track.album.cover" alt="">
        </div>
        <div class="track__item">
          <p> {{ cutString(track.title, 20) }}</p>
          <p class="end">{{ formatTime(track.duration) }}</p>
          <a :href="track.link" target='__blank' class="end"><i class="fas fa-headphones-alt"></i></a>
          <span class="album"> ({{ cutString(track.album.title, 20) }})</span>
        </div>
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
    },
    cutString(str, val) {
      if (str.length > val) {
        return str.substr(0, val) + '...'
      } else {
        return str
      }
    }
  }
}
</script>

<style scoped>

.track__wrapper{
   display: grid;
    grid-template-columns: 160px auto;
    align-items: center;
    height: 150px;
    border-bottom: 1px solid rgba(123, 135, 151, 0.2);
    padding: 25px 0;
}

.track__item{
    display: grid;
    grid-template-columns: auto 8ch min-content;
    column-gap: 10px;
    align-items: center;
    justify-items: left;
    cursor: default;
    font-size: 25px;
  }

.album{
  word-break: break-all;
  }

  .track__img{
    align-self: center;
    justify-self: start;
    margin-right: 10px;
    height: 150px;
  }
  .end{
    display: grid;
    width: 100%;
    text-align: end;
    text-decoration: none;
    }
  .fa-headphones-alt{
    font-size: 40px;
    color: #648BFF;
    }

   @media only screen and (max-width: 770px) {
      .track__wrapper{
        margin: 0 5px;
        grid-template-columns: 110px auto;
        padding: 15px 0;
      }
      .track__item{
        grid-template-columns: auto 8ch min-content;
        font-size: 14px;
      }
      .fa-headphones-alt{
        font-size: 20px;
      }
      .track__cover .track__img{
        height: 100px;
      }
    }

@media only screen and (min-width: 770px) {

      .track__item{
        font-size: 18px;
      }
      .fa-headphones-alt{
        font-size: 40px;
      }
      .track__wrapper{
        padding: 25px 0;
      }
      .track__img{
        height: 150px;
      }
    }

@media only screen and (min-width: 950px) {
    .track__item{
        font-size: 25px;
}
}
</style>
