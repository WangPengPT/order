const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
        { path: '', component: () => import('pages/IndexPage.vue') },
        { path: '/order',component: () => import('pages/OrderPage.vue') },
        { path: '/qcode',component: () => import('pages/QCodePage.vue') },
        { path: '/menu',component: () => import('pages/UpdateMenu.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
