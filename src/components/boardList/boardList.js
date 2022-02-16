import { CardService } from "@/api/cardApi";

import Card from "@/components/card/card.vue";
import ListAddNewCard from "@/components/listAddNewCard/listAddNewCard.vue";
import BoardListHeaderMenu from "./boardListHeaderMenu/boardListHeaderMenu.vue";
import Draggable from "vuedraggable";
import ClickOutside from "vue-click-outside";

export default {
	directives: {
		ClickOutside
	},

	components: {
		Card,
		ListAddNewCard,
		BoardListHeaderMenu,
		Draggable
	},

	props: {
		list: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
      saving: false,
			showListHeaderMenu: false, 
			showAddNewCard: false,
			editMode: false,
			loading: false,
			cards: []
		}
	},

	methods: {
		closeListHeaderMenu,
    closeShowAddNewCard,
		initEditMode,
		getCards,
		getCardsByListId,
		updateListName,
		archiveList,
		updateCardPosition,
		addNewCard
	},

	mounted() {
		this.getCards();

		this.$eventBus.$on("cardChanged", this.getCardsByListId);
	},

	beforeDestroy() {
		this.$eventBus.$on("cardChanged", this.getCardsByListId);
	}
}

function closeListHeaderMenu() {
	this.showListHeaderMenu = false;
}

function closeShowAddNewCard() {
  this.showAddNewCard = false
}

function initEditMode() {
	this.editMode = true;
	this.$nextTick(() => {
		this.$refs[`${this.list.id}-list-name-input`].focus();
	});
}

async function getCards() {
	try {
		this.loading = true;
		const { data } = await CardService.getCards(this.list.id);

		this.cards = data;
	} catch (error) {
		console.warn(error);
	} finally {
		this.loading = false;
	}
}

function getCardsByListId({ listId, cardId }) {
	if (this.list.id === listId) {
		let result = this.cards.filter(card => card.id === cardId);

		if (result.length) {
			this.getCards();
		}
	}
}

async function updateListName() {
	if (!this.list.name.length) {
		return;
	}

	const request = {
		id: this.list.id,
		data: {
			name: this.list.name
		}
	};

	try {
		await this.$listRepository.updateList(request);
	} catch (error) {
		console.warn(error);
	} finally {
		this.editMode = false;
	}
}

async function archiveList() {
	try {
		const request = {
			id: this.list.id,
			data: {
				closed: true
			}
		};

		await this.$listRepository.updateList(request);

		// need to contact parent to load lists
		this.$emit("list-archived");
	} catch (error) {
		console.warn(error);
	}
}

async function updateCardPosition(listId, { moved, added }) {
	if (!moved && !added) {
		return;
	}

	const request = {};

	// cards dragged to another list
	if (added) {
		request.id = added.element.id;
		request.data = {
			pos: "bottom" // cards moved to new list will be placed on bottom
		};
	}
	// cards moved inside list 
	else if (moved) {
		request.id = moved.element.id;
		request.data = {
			pos: this.$utils.generateItemPosition(moved.newIndex, this.cards, "pos")
		};
	}

	request.data.idList = listId;

	const { data } = await this.$cardRepository.updateCard(request);

	if (added) {
		this.$set(this.cards, added.newIndex, data);
	} else {
		this.$set(this.cards, moved.newIndex, data);
	}
}

async function addNewCard(request) {
  this.saving = true
	try {
		const { data } = await this.$cardRepository.createCard(request);

		this.cards.push(data);
    this.closeShowAddNewCard()
	} catch (error) {
		console.warn(error);
	} finally {
    this.saving = false
  }
}