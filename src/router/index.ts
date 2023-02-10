import { useAuthStore } from './../stores/auth';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import LogoutPage from '../views/LogoutPage.vue'
import PageContainer from '@/components/PageContainer.vue';
import SchedaPage from '@/views/SchedaPage.vue'
import TabsBaseVue from '@/views/TabsBase.vue';
import FavouritesPageVue from '@/views/FavouritesPage.vue';
import AllenamentiPageVue from '@/views/AllenamentiPage.vue';
import ListaEserciziPageVue from '@/views/ListaEserciziPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tabs',
    component: TabsBaseVue,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'favourites',
        component: FavouritesPageVue
      },
      {
        path: 'esercizi',
        component: AllenamentiPageVue
      },
      {
        path: 'schede',
        component: ListaEserciziPageVue
      },
      {
        path: 'reservations',
        component: HomePage
      },
    ],
  },
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/scheda/:id',
    component: SchedaPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/logout',
    component: LogoutPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const store = useAuthStore()

  if (to.path == '/login' && store.isLogged){
      return {
          path: '/logout'
      }
  }

      
})

export default router
