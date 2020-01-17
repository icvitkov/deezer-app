import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchResults from '../views/SearchResults/SearchResults.vue'
import Artist from '../views/Artist.vue'
import Playlist from '../views/Playlist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/searchresults',
    name: 'searchresults',
    component: SearchResults
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component: Artist
  },
  {
    path: '/playlist/:id',
    name: 'playlist',
    component: Playlist
  }
]

const router = new VueRouter({
  routes
})

export default router
