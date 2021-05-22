import CreateBoardForm from "@/components/createBoardForm/createBoardForm.vue";

export default {
    props: {
        boards: {
            type: Array,
            required: true
        }
    },

    components: {
        CreateBoardForm
    },

    data() {
        return {
            createNewBoard: false
        }
    },

    methods: {
        submitCreateBoard
    }
}

async function submitCreateBoard(request) {
    try {
        await this.$boardRepository.createBoard(request);
        this.$emit("boardListChanged");
    } catch (error) {
        console.warn(error);
    }
}