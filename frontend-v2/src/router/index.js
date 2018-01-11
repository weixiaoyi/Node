import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/v1/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(["@pages/home.vue"] , resolve),
      children: [
        {
          name:'nav',
          path: 'nav',
          component: (resolve) => require(["@pages/navigation.vue"] , resolve),
        }
      ]
    },
    {
      path:'*',
      redirect:'/',
    }
  ]
})
