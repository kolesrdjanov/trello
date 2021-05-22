import Vue from "vue"
import Vuex from "vuex"
import organization from "./modules/organization.js";
import user from "./modules/user.js";
import board from "./modules/board.js";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		organization,
		user,
		board
	}
})
