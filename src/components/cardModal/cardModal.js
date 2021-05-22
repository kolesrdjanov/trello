import { createNamespacedHelpers } from "vuex";
const { mapGetters: userGetters } = createNamespacedHelpers("user");

import EditCardModalField from "@/components/editCardModalField/editCardModalField.vue";
import CardModalComments from "@/components/cardModalComments/cardModalComments.vue";

export default {
    components: {
        EditCardModalField,
        CardModalComments
    },

    data() {
        return {
            card: null,
            actions: [],
            editDescription: false,
            editName: false,
        }
    },
    
    methods: {
        loadCard,
        loadActions,
        updateCardField,
        archiveCard,
        updateBoard,
        createComment,
        updateComment,
        removeComment,        
        close
    },

    beforeMount() {
        this.loadCard();
        this.loadActions();
    },

    computed: {
        ...userGetters([
            "user"
        ])
    }
};

async function loadCard() {
    try {
        const params = {
            id: this.$route.params.cardId,
            list: true,
            attachments: true,
            members: true
        };

        const { data } = await this.$cardRepository.getCard(params);

        this.card = data;
    } catch (error) {
        // card not found
        this.close();
        console.warn(`${error.response.status} ${error.response.data}`);
    }
}

async function loadActions() {
    try {
        const { data } = await this.$cardRepository.getCardActions(this.$route.params.cardId);

        this.actions = data.filter(action => action.type === "commentCard").map(action => ({
            ...action,
            edit: false
        }));
    } catch (error) {
        console.warn(error);
    }
}

async function updateCardField(obj) {
    try {
        const request = {
            id: this.card.id,
            data: {
                [obj.field]: obj.value
            }
        };

        await this.$cardRepository.updateCard(request);
        this.card[obj.field] = obj.value;
        this.updateBoard();
    } catch (error) {
        console.warn(error);
    }
}

async function archiveCard() {
    try {
        await this.$cardRepository.archiveCard(this.card.id);
        this.updateBoard();
        this.close();
    } catch (error) {
        console.warn(error);
    }
}

function updateBoard() {
    this.$eventBus.$emit("cardChanged", {
        listId: this.card.idList,
        cardId: this.card.id
    });
}

async function createComment(text) {
    try {
        const request = {
            id: this.card.id,
            data: {
                text: text
            }
        };

        const { data } = await this.$cardRepository.createCardComment(request);
        
        data.edit = false

        this.actions.unshift({
            ...data
        });
        this.updateBoard();
    } catch (error) {
        console.warn(error);
    }
}

async function updateComment(obj) {
    try {
        await this.$cardRepository.updateCardAction(obj.request);
    } catch (error) {
        console.warn(error);
    }
}

async function removeComment(id) {
    try {
        await this.$cardRepository.removeCardAction(id);

        this.loadActions();
        this.updateBoard();
    } catch (error) {
        console.warn(error);
    }
}

function close() {
    this.$router.push({ name: "board", params: { boardId: this.$route.params.boardId }});
    this.card = null;
}
