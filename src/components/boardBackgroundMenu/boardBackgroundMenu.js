export default {
	props: {
		board: {
			type: Object
		}
	},

	data() {
		return {
			colors: [],
			selectedColor: null
		}
	},

	methods: {
		pickColor,
		getBoardColor
	},

	mounted() {
		this.colors = this.$utils.constants.COLORS;
		this.getBoardColor();
	}
}

async function pickColor(index) {
	this.selectedColor = this.colors[index];

	const request = {
		id: this.board.id,
		data: {
			"prefs/background": this.selectedColor
		}
	};

	const { data } = await this.$boardRepository.updateBoard(request);
	this.$emit("updateBoard", data);
}

function getBoardColor() {
	this.selectedColor = this.board.prefs.background;
}