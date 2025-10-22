import { createRouter, createWebHistory } from 'vue-router'

// Routes: map '/' to Accueil page. Add more routes here later.
const routes = [
	{
		path: '/',
		name: 'Accueil',
		component: () => import('../page/Accueil.vue')
	},
	{
		path: '/favoris',
		name: 'Favoris',
		component: () => import('../page/Favoris.vue')
	},
	// fallback - redirect unknown paths to home
	{
		path: '/:catchAll(.*)',
		redirect: '/'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
