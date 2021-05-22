import { createNamespacedHelpers } from "vuex";
import BoardList from "@/components/boardList/boardList.vue";
import BoardSidebar from "@/components/boardSidebar/boardSidebar.vue";
import Draggable from "vuedraggable";

const { mapMutations: boardMutations } = createNamespacedHelpers("board");

export default {
	components: {
		BoardList,
		BoardSidebar,
		Draggable
	},

	data() {
		return {
			boardSidebar: false,
			editMode: false,
			loading: false,
			board: null,
			lists: [],
			newListTitle: ""
		};
	},

	computed: {
		boardId() {
			return this.$route.params.boardId
		}
	},

	methods: {
		initEditMode,
		updateBoardName,
		getBoard,
		getLists,
		updateListPosition,
		addNewList,
		removeBoard,
		...boardMutations([
			"setBoard"
		])
	},

	beforeMount() {
		this.getBoard();
		this.getLists();
	}
};

function initEditMode() {
	this.editMode = true;
	this.$nextTick(() => {
		this.$refs.boardNameInput.focus();
	});
}

async function updateBoardName() {
	if (!this.board.name.length) {
		return;
	}

	const request = {
		id: this.board.id,
		data: {
			name: this.board.name
		}
	};

	try {
		const { data } = await this.$boardRepository.updateBoard(request);
		this.setBoard(data);
	} catch (error) {
		console.warn(error);
	} finally {
		this.editMode = false;
	}
}

async function getBoard() {
	try {
		this.loading = true;
		const { data } = await this.$boardRepository.getBoard(this.boardId);

		this.board = data;
		this.setBoard(data);
	} catch (error) {
		console.warn(error);
	} finally {
		this.loading = false;
	}
}

async function getLists() {
	try {
		const { data } = await this.$listRepository.getBoardLists(this.boardId);

		this.lists = data;
	} catch (error) {
		console.warn(error);
	}
}

async function updateListPosition({ moved }) {
	const request = {
		id: moved.element.id,
		data: {
			pos: this.$utils.generateItemPosition(moved.newIndex, this.lists, "pos")
		}
	};

	try {
		const { data } = await this.$listRepository.updateList(request);
		this.$set(this.lists, moved.newIndex, data);
	} catch (error) {
		console.warn(error);
	}
	
}

async function addNewList() {
	if (!this.newListTitle.length) {
		this.$refs.listNameInput.focus();

		return;
	}

	const request = {
		idBoard: this.boardId,
		name: this.newListTitle,
		pos: "bottom"
	};

	try {
		const { data } = await this.$listRepository.createList(request);

		this.lists.push(data);
		this.newListTitle = "";
	} catch (error) {
		console.warn(error);
	}
}

async function removeBoard() {
	try {
		await this.$boardRepository.removeBoard(this.boardId);
		this.$router.push("/home");
	} catch (error) {
		console.warn(error);
	}
}
