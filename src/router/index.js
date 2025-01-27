import{createRouter,createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import view from '@/views/view.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';

const router =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path:'/',
        name:'home',
        component:HomeView
    },{
        path:'/jobs',
        name:'jobs',
        component:view,
    },{
        path:'/job/:id',
        name:'job',
        component:JobView,
    },
    
    {
        path:'/:catchAll(.*)',
        name:'not-found',
        component:NotFoundView,
    }
]
});

export default router;
