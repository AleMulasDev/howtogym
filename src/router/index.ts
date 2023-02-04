import { useAuthStore } from './../stores/auth';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import LogoutPage from '../views/LogoutPage.vue'
import PageContainer from '@/components/PageContainer.vue';
import SchedaPage from '@/views/SchedaPage.vue'
import TabsBaseVue from '@/views/TabsBase.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tabs',
    component: TabsBaseVue,
    props: route => {
      console.log(route)
      switch(route.path){
        case '':
          return {name: 'Home Page'}
        
      }
      return {name: 'Home Page'}
    },
    children: [
      {
        path: '/',
        component: HomePage
      },
      {
        path: '/favourites',
        component: HomePage
      },
      {
        path: '/esercizi',
        component: HomePage
      },
      {
        path: '/schede',
        component: HomePage
      },
      {
        path: '/reservations',
        component: HomePage
      },
    ],
  },
  {
    path: '/',
    component: HomePage
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
