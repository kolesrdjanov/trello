import { createNamespacedHelpers } from "vuex";
import { UserService } from "@/api/userApi";
const { mapMutations: userMutations } = createNamespacedHelpers("user");
const { mapGetters: boardGetters } = createNamespacedHelpers("board");

import TopNavigation from "@/components/topNavigation/topNavigation.vue";

export default {
    components: {
        TopNavigation
    },

    methods: {
        getMe,
        ...userMutations([
			"setUser"
		])
    },

    mounted() {
        this.getMe();
    },

    computed: {
        ...boardGetters([
            "board"
        ]),

        background() {
            return this.board && this.board.prefs && this.$route.name !== "home";
        }
    }
};

async function getMe() {
    try {
        const { data }  = await UserService.getMe(),
            user = {
                id: data.id,
                avatarUrl: data.avatarUrl,
                fullName: data.fullName
            };

        // push user to user store module
        this.setUser(user);
    } catch (error) {
        console.warn(error);
    }
}
