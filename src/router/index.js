import {createRouter, createWebHistory} from 'vue-router'



const home = () => import('views//home/Home')
const category = () => import('views/category/Category')
const cart = () => import('views/cart/Cart')
const profile = () => import('views/profile/Profile')

const routes = [
    {path: '', redirect: '/home'},
    {path: '/home', component: home},
    {path: '/category', component: category},
    {path: '/cart', component: cart},
    {path: '/profile', component: profile}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
