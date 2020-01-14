<template>
  <div>
    <h1>
      Genre
    </h1>
      <div class="genre__container">
        <div class="genre__item" v-for="genre in deezerGenre" :key="genre.id">
          {{genre.name}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      deezerGenre: {}
    }
  },
  mounted() {
    this.getGenre()
  },
  methods: {
    async getGenre() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
      const deezerGenre = await response.json()
      this.deezerGenre = deezerGenre.data
      console.log(this.deezerGenre)
    }
  }
}
</script>

<style>
.home{
  text-align: left;
  }

.genre__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
background: linear-gradient(0deg, rgba(30,30,37,1) 65%, rgba(52,57,63,1) 100%);
  padding: 30px;
  }

  .genre__item {
  display: grid;
  color: #ffffff;
  background-color: rgba(52, 57, 63, 0);
  height: 100px;
  align-content: center;
  border: 1px solid;
  border-image-source: linear-gradient(20deg, rgb(122, 37, 49), rgba(52, 57, 63, 0));
  border-image-slice: 1;
  }

  .module-border-wrap {
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, red, purple);
  padding: 3px;
}

.module {
  background: #222;
  color: white;
  padding: 2rem;
}

</style>
