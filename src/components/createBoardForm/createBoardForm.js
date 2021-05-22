export default {
	data() {
		return {
			title: "",
			colors: [],
			selectedColor: null
		}
	},

	mounted() {
		this.colors = this.$utils.constants.COLORS;
		this.selectedColor = this.colors[0];
		this.$refs.boardNameInput.focus();
	},
	
	methods: {
		pickColor,
		submit
	}
}

function pickColor(index) {
	this.selectedColor = this.colors[index];
}

function submit() {
	this.$emit("save", {
		idOrganization: process.env.VUE_APP_TRELLO_ORG_ID,
		name: this.title,
		prefs_background: this.selectedColor
	});
	this.$emit("close");
}
