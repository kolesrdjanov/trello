export default {
	props: {
		placeholder: {
			type: String
		},
		singleLine: {
			type: Boolean
		},
		field: {
			type: String
		},
		value: {
			type: String
		}
	},

	data() {
		return {
			model: this.value
		}
	},

	methods: {
		submit,
		close
	},

	mounted() {
		this.$refs.cardFieldInput.focus();
	}
};

function submit() {
	this.$emit("save", {
		field: this.field,
		value: this.model
	});
	this.close();
}

function close() {
	this.$emit("close");
}
