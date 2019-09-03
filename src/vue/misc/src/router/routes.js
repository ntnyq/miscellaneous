export default [
  {
    path: '/gradient',
    name: 'Gradient',
    component: () => import('@/views/CSS/Gradient'),
  },

  {
    path: '/radio-buttons',
    name: 'RadioButtons',
    component: () => import('@/views/Components/RadioButtons'),
  },

  {
    path: '/videojs',
    name: 'Vidoejs',
    component: () => import('@/views/Videojs'),
  },

  {
    path: '/font-awesome',
    name: 'FontAwesome',
    component: () => import('@/views/FontAwesome'),
  },
]
