const initialData = () => ({
	info: null
});

export default {
	namespaced: true,

	state: {
		...initialData()
	},

	mutations: {
		setUser,
		resetState
	},

	actions: {
	},

	getters: {
		user: state => state.info
	}
};

function setUser(state, info) {
	state.info = info;
}

function resetState(state) {
	Object.assign(state, {
		...initialData()
	});
}
