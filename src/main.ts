import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const pinia = createPinia()
const app = createApp(App)
library.add(faUserSecret, faTrash, faPenToSquare)

app.use(pinia)
app.use(router)

app.use(vuetify).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
