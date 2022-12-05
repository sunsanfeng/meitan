import { createRouter,createWebHistory } from 'vue-router';

const router = createRouter({
	history:createWebHistory(),
	routes:[
		{
			path:'/',
			component:()=>import('../page/MyHome/MyHome.vue'),
		},
		{
			path:'/cart',
			component:()=>import('../page/MyCart/MyCart.vue'),
		},
		{
			path:'/order',
			component:()=>import('../page/MyOrder/MyOrder.vue'),
		},
		{
			path:'/mine',
			component:()=>import('../page/mine/Mine.vue'),
		},
		{
			path:'/store',
			component:()=>import('../page/Store/Store.vue'),
		},
	],
});

export default router;