import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// referenca: https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
function vow(promise) {
  return promise.then((data) => {
    return [null, data];
  })
    .catch((err) => [err]);
};

export default new Vuex.Store({
  state: {
    searchString: '',
    allArtists: [],
    allAlbums: [],
    allTracks: [],
    artist: [],
    artistPlaylist: [],
    playlistItems: [],
    banner: '',
    playlistTitle: ''
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
    },
    setArtistSingle(state, value) {
      state.artist = value;
    },
    setArtistPlaylist(state, value) {
      state.artistPlaylist = value;
    },
    setPlaylistItems(state, value) {
      state.playlistItems = value;
    },
    setBanner(state, value) {
      state.banner = value;
    },
    setPlaylistTitle(state, value) {
      state.playlistTitle = value;
    }
  },
  actions: {
    async getArtists({ commit, state }, payload) {
      let err, res;
      [err, res] = await vow(fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist/autocomplete?limit=1&q=' + state.searchString))
      if (err) {
        Vue.prototype.toast.error('Server error occurred', 'Error')
      } else if (res) {
        const deezerArtists = await res.json()
        commit('setArtists', deezerArtists.data)
      }
    },

    async getAlbums({ commit, state }, payload) {
      let err, res
      [err, res] = await vow(fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/album/autocomplete?limit=' + payload + '&q=' + state.searchString))
      if (err) {
        Vue.prototype.toast.error('Server error occurred', 'Error')
      } else if (res) {
        const deezerAlbums = await res.json()
        commit('setAlbums', deezerAlbums.data)
      }
    },
    async getTracks({ commit, state }, payload) {
      let err, res
      [err, res] = await vow(fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?limit=' + payload + '&q=' + state.searchString))
      if (err) {
        Vue.prototype.toast.error('Server error occurred', 'Error')
      } else if (res) {
        const deezerTracks = await res.json()
        commit('setTracks', deezerTracks.data)
      }
    },
    async getArtistSingle({ commit, state }, payload) {
      let err, res
      [err, res] = await vow(fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + payload))
      if (err) {
        Vue.prototype.toast.error('Server error occurred', 'Error')
      } else if (res) {
        const deezerArtistSingle = await res.json()
        commit('setArtistSingle', deezerArtistSingle)
      }
    },
    async getArtistPlaylist({ commit, state }, payload) {
      let err, res
      [err, res] = await vow(fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + payload + '/top?limit=15'))
      if (err) {
        Vue.prototype.toast.error('Server error occurred', 'Error')
      } else if (res) {
        const deezerArtistPlaylist = await res.json()
        commit('setArtistPlaylist', deezerArtistPlaylist.data)
      }
    },
    async getPlaylistItems({ commit, state }, payload) {
      let err, res
      [err, res] = await vow(fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/' + payload))
      if (err) {
        Vue.prototype.toast.error('Server error occurred', 'Error')
      } else if (res) {
        const deezerPlaylistItems = await res.json()
        commit('setPlaylistItems', deezerPlaylistItems.tracks.data)
        commit('setBanner', deezerPlaylistItems.picture_xl)
        commit('setPlaylistTitle', deezerPlaylistItems.title)
      }
    }
  },

  getters: {
    filterExplicit: (state) => {
      return state.playlistItems.filter((item) => !item.explicit_lyrics)
    }
  }
})
