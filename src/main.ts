import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Font awesome icons */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faChevronLeft, faSearch, faStar, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faUser as rfaUser, faStar as rfaStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Pinia store */
import { createPinia } from 'pinia';
const pinia = createPinia()

library.add(faUser)
library.add(rfaUser)
library.add(faChevronLeft)
library.add(faSearch)
library.add(faStar)
library.add(rfaStar)
library.add(faCalendar)

const app = createApp(App)
.use(IonicVue)
.use(router)
.use(pinia);

app.component('font-awesome-icon', FontAwesomeIcon)

router.isReady().then(() => {
  app.mount('#app');
});