import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchResults from '../views/SearchResults.vue'
import Artist from '../views/Artist.vue'
import Playlist from '../views/Playlist.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  { path: '/playlist/:id', component: Playlist }
]

const router = new VueRouter({
  routes
})

export default router
