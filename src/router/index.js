import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "main",
		component: () => import("@/views/mainView/mainView.vue"),
		redirect: {
			name: "home"
		},
		children: [
			{
				path: "/home",
				name: "home",
				component: () => import("@/views/home/home.vue")
			},
			{
				path: "/boards/:boardId",
				name: "board",
				component: () => import("@/views/board/board.vue"),
				children: [
					{
						path: "/boards/:boardId/card/:cardId",
						name: "cardDetails",
						component: () => import("@/components/cardModal/cardModal.vue")
					}
				]
			}
		]
	},
	{ 
		path: '/*', 
		component: () => import("@/views/notFound.vue"),
		name: 'NotFound'
	}
]


// TODO: add route change after to update document.title

const router = new VueRouter({
	routes
})

export default router
