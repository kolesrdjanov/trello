export default {
	props: {
		show: {
			type: Boolean,
			required: true
		}
	},

	methods: {
		close
	}
};

function close() {
	this.$emit("close");
}
