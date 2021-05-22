export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isEditMode: false,
            newCardName: ""
        }
    },

    methods: {
        enableEdit,
        saveCardName
    },
};

function enableEdit() {
    this.isEditMode = true;
    this.newCardName = this.card.name;

    this.$nextTick(() => {
        this.$refs.cardNameInput.focus();
    });
}

async function saveCardName() {
    if (!this.newCardName.length) {
        this.$refs.cardNameInput.focus();

        return;
    }

    const request = {
        id: this.card.id,
        data: {
            name: this.newCardName
        }
    };

    try {
        await this.$cardRepository.updateCard(request);
        
        this.card.name = this.newCardName;
        this.isEditMode = false;
    } catch(error) {
        console.warn(error);
    }


}
