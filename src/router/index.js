import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index/Index.vue'
import Recruit from '../views/recruit/Recruit.vue'
import WantJob from '../views/wantjob/WantJob.vue'
import JobFair from '../views/jobfair/JobFair.vue'
import Notice from '../views/notice/Notice.vue'
import Policy from '../views/policy/Policy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Index
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/recruit',
    component: Recruit
  },
  {
    path: '/wantjob',
    component: WantJob
  },
  {
    path: '/jobfair',
    component: JobFair
  },
  {
    path: '/testnotice',
    component: Notice
  },
  {
    path: '/policynews',
    component: Policy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router