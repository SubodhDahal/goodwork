import './../../bootstrap'
import index from './../../components/admin/index.vue'
import navbar from './../../components/partials/navbar.vue'
import notificationPopup from './../../components/partials/notificationPopup.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  components: {
    index, navbar, notificationPopup
  }
})
