const initialData = () => ({
	
});

export default {
	namespaced: true,

	state: {
		...initialData()
	},

	mutations: {
		resetState
	},

	actions: {
		
	},

	getters: {
		
	}
};

function resetState(state) {
	Object.assign(state, {
		...initialData()
	});
}
