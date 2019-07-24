import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login.vue';
import AuthLayout from '@/components/AuthLayout.vue';
import NotFoundPage from '@/components/404.vue';
import PageList from '@/components/pages/PageList.vue';
import PageCreate from '@/components/pages/PageCreate.vue';
// eslint-disable-next-line import/no-cycle
import AuthService from './services/auth.service';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: PageList,
        },
        {
          path: 'pages',
          name: 'page-list',
          component: PageList,
        },
        {
          path: 'page-create',
          name: 'page-create',
          component: PageCreate,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      name: '404',
      redirect: '/404',
    },
    {
      path: '/404',
      component: NotFoundPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authenticated = AuthService.isAuthenticated();
  if (authenticated && to.name === 'login') {
    next({ name: 'home' });
  } else if (!authenticated && to.name === 'login') {
    next();
  } else if (!authenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});
export default router;
