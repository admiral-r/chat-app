import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../../pages/homePage.vue'
import chat from '../../pages/chat.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'homePage',
            component: homePage
        },
        {
            path: '/chat',
            name: 'chat',
            component: chat
        },
    ]
})

export default router