import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes=[
    {
        path: '/',
        component: () => import('../components/PaginaPrincipal.vue'),
        children: [
            {
                path:'/inicio',
                name: 'inicio',
                component: ()=>import('../components/Inicio.vue')
            },
            {
                path: '/inicio/formulario',
                name: 'Formulario',
                component: ()=>import('../components/Formulario.vue')
            },
            {
                path: '/inicio/paginacion',
                name: 'Paginacion',
                component: ()=>import('../components/Paginacion.vue')
            },
        ]
    }
]

const router = new VueRouter({routes})
export default router; 