const initialData = () => ({
	board: null
});

export default {
	namespaced: true,

	state: {
		...initialData()
	},

	mutations: {
        setBoard,
		resetState
	},

	actions: {
		
	},

	getters: {
		board: state => state.board
	}
};

function setBoard(state, board) {
	state.board = board;
}

function resetState(state) {
	Object.assign(state, {
		...initialData()
	});
}
