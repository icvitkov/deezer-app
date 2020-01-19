<template>
  <div class="track__wrapper">
        <div class="track__cover">
             <img class="track__img" :src="playlist.album.cover" alt="">
        </div>

        <div class="track__item">
          <div>
            <p class="text"> {{ cutString(playlist.title, 20)}}</p>
          </div>
          <p class="album">({{ cutString(playlist.album.title, 20) }})</p>
          <p class="end duration">{{ formatTime(playlist.duration) }}</p>
          <a :href="playlist.link" target='__blank' class="end"><i class="fas fa-headphones-alt"></i></a>
          <span>{{ cutString(playlist.artist.name, 15)}}</span>
        </div>

    </div>
</template>

<script>
export default {
  props: {
    playlist: {
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

  .playlist{
    width: 90%;
    margin: 0 5%;
  }
  .track__item{
      display: grid;
      grid-template-columns: 1fr 1fr auto 100px;
      column-gap: 10px;
      align-items: center;
      justify-items: left;
      cursor: default;
      font-size: 25px;
  }
  .track__wrapper{
    display: grid;
    grid-template-columns: 160px auto;
    align-items: center;
    height: 150px;
    border-bottom: 1px solid rgba(123, 135, 151, 0.2);
    padding: 25px 0;
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
    .album{
      word-break: break-all;
    }
    .fa-headphones-alt{
      font-size: 40px;
      color: #648BFF;
    }

    @media only screen and (max-width: 770px) {
      .album{
        display: none;
      }
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

    @media only screen and (min-width:770px) {

      .track__item{
        font-size: 18px;
        grid-template-columns: 1fr 1fr auto 100px;
      }
      .fa-headphones-alt{
        font-size: 40px;
      }
      .track__wrapper{
        padding: 25px 0;
        grid-template-columns: 160px auto;
      }
    }

    @media only screen and (min-width: 950px) {
      .track__item{
        font-size: 25px;
      }
    }
</style>
