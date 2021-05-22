import { createNamespacedHelpers } from "vuex";
const { mapGetters: userGetters } = createNamespacedHelpers("user");
const { mapGetters: boardGetters } = createNamespacedHelpers("board");

export default {
    computed: {
        ...userGetters([
            "user"
        ]),
        ...boardGetters([
            "board"
        ]),

        background() {
            return this.board && this.board.prefs && this.$route.name !== "home";
        }
    }
};
