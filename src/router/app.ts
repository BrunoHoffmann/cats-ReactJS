const routes = [
    { path: '/', name: 'Login', component: () => import('../pages/Login/Login.vue') },
    { path: '/register', name: 'Register', component: () => import('../pages/Register/Register.vue') },
];

export default routes;
