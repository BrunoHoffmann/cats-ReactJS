const routes = [
    { path: '/', name: 'Login', component: () => import('../pages/Login/Login.vue') },
    { path: '/register', name: 'Register', component: () => import('../pages/Register/Register.vue') },
    { path: '/forgot', name: 'Forgot', component: () => import('../pages/Forgot/Forgot.vue') },
];

export default routes;
