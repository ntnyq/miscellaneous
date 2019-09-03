const menu = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/me',
    name: '个人',
  },
  {
    path: '/login',
    name: '登录',
    hideAfterLogin: true,
  },
  {
    path: '/regist',
    name: '注册',
    hideAfterLogin: true,
  },
  {
    path: '/logout',
    name: '退出',
    hideBeforeLogin: true,
  },
]

export default menu
