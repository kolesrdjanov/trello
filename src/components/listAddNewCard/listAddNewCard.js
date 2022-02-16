export default {
    props: {
        listId: {
            type: String,
            required: true
        },
        saving: {
          type: Boolean,
          default: false
        }
    },

    data() {
        return {
            model: {
                name: "",
                pos: "bottom"
            }
        }
    },

    methods: {
        submit,
        close
    },

    mounted() {
        this.$refs.cardNameInput.focus();
    }
};

function submit() {
    if (!this.model.name.length) {
        this.$refs.cardNameInput.focus();

        return;
    }

    this.$emit("save", {
        ...this.model,
        idList: this.listId
    });
}

function close() {
    this.$emit("close")
}
