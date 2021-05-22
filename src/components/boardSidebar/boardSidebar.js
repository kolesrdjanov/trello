import { createNamespacedHelpers } from "vuex";
import BoardBackgroundMenu from "@/components/boardBackgroundMenu/boardBackgroundMenu.vue";
const { mapGetters: boardGetters, mapMutations: boardMutations } = createNamespacedHelpers("board");

export default {
	components: {
		BoardBackgroundMenu
	},

	data() {
		return {
			activeMenuItem: null,
			actions: null
		}
	},

	methods: {
		...boardMutations([
			"setBoard"
		]),
		getActions,
		setActiveMenuItem,
		close
	},

	computed: {
		...boardGetters([
			"board"
		])
	},

	mounted() {
		this.getActions();
	}
}

async function getActions() {
	try {
		const { data } = await this.$boardRepository.getBoardActions(this.board.id);
		this.actions = data;
	} catch (error) {
		console.warn(error);
	}
}

function setActiveMenuItem(menuItem) {
	this.activeMenuItem = menuItem;
}

function close() {
	this.$emit("close");
}