import{createRouter,createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import view from '@/views/view.vue';

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
    }]
});

export default router;
