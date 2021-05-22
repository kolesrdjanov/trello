import EditCardModalField from "@/components/editCardModalField/editCardModalField.vue";

export default {
    props: {
        user: {
            type: Object
        },

        comments: {
            type: Array,
            required: true
        }
    },

    components: {
        EditCardModalField
    },

    data() {
        return {
            newComment: "",
            addNewComment: false,
            editMode: false
        }
    },

    methods: {
        scrollToComment,
        toggleEdit,
        updateComment,
        hideAddNewComment
    },

    watch: {
        "comments": function(val) {
            if (val) {
                this.scrollToComment();
            }
        }
    }
}

function scrollToComment() {
    if (this.$route.hash) {
        this.$nextTick(() => {
            const element = document.querySelector(this.$route.hash);
            element && element.scrollIntoView();
        });
    }
}

function toggleEdit(index) {
    this.comments[index].edit = !this.comments[index].edit;
}

function updateComment(event, comment, index) {
    this.comments[index].data.text = event.value;

    const obj = {
        index: index,
        request: {
            id: comment.id,
            data: {
                [event.field]: event.value
            },
        }
    };

    this.$emit("updateComment", obj);
}

function hideAddNewComment() {
    this.newComment = '';
    this. addNewComment = false;
}
