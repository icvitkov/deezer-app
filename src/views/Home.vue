<template>
  <div class='home'>
    <input type="text" v-model='search'>
    <button @click='getDeezerResults'>Search</button>
    <p>{{search}}</p>
    <ul>
      <li v-for="track in deezerResults" :key="track.id">{{track.title}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      deezerResults: null,
      search: ''
    }
  },
  mounted() {

  },
  methods: {
    async getDeezerResults() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=' + this.search)
      const deezerResults = await response.json()
      this.deezerResults = deezerResults.data
      console.log(this.deezerResults)
    }
  }
}
console.log('aaa')
</script>
