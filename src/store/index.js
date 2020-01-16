import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchString: '',
    allArtists: [],
    allAlbums: [],
    allTracks: []
  },
  mutations: {
    setSearchString(state, value) {
      state.searchString = value;
    },
    setArtists(state, value) {
      state.allArtists = value;
    },
    setAlbums(state, value) {
      state.allAlbums = value;
    },
    setTracks(state, value) {
      state.allTracks = value;
    }
  },
  actions: {
    async getArtists({ commit, state }, payload) {
      console.log('ZOVEM AKCIJU AAAAAA')
      const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist/autocomplete?limit=3&q=' + state.searchString)
      const deezerArtists = await response.json()
      console.log('getArtists API response: ', deezerArtists)
      commit('setArtists', deezerArtists.data)
    },

    async getAlbums({ commit, state }, payload) {
      const response = await fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/album/autocomplete?limit=3&q=' + state.searchString)
      const deezerAlbums = await response.json()
      console.log('getAlbums API response: ', deezerAlbums)
      commit('setAlbums', deezerAlbums.data)
    },
    async getTracks({ commit, state }, payload) {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?limit=3&q=' + state.searchString)
      const deezerTracks = await response.json()
      console.log('getTracks API response: ', deezerTracks)
      commit('setTracks', deezerTracks.data)
    }
  },
  getters: {

  }
})
