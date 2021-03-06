import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Übersicht from '@/views/Übersicht'
import VerbundeneKonten from '@/views/VerbundeneKonten'
import Einstellungen from '@/views/Einstellungen'
import Persons from '@/views/Persons'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/uebersicht',
    name: 'Übersicht',
    component: Übersicht
  },
  {
    path: '/verbundeneKonten',
    name: 'VerbundeneKonten',
    component: VerbundeneKonten
  },
  {
    path: '/einstellungen',
    name: 'Einstellungen',
    component: Einstellungen
  },
  {
    path: '/persons',
    name: 'Persons',
    component: Persons
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
