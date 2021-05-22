import restAPI from "@/config/http";

export default class CardApi {
	getCards(id) {
		return restAPI({
			method: "GET",
			url: `/lists/${id}/cards`
		});
	}

	getCard(params) {
		return restAPI({
			method: "GET",
			url: `/cards/${params.id}`,
			params: params
		});
	}

	createCard(request) {
		return restAPI({
			method: "POST",
			url: `/cards`,
			data: request
		});
	}

	updateCard(request) {
		return restAPI({
			method: "PUT",
			url: `/cards/${request.id}`,
			data: request.data
		});
	}

	archiveCard(id) {
		return restAPI({
			method: "DELETE",
			url: `/cards/${id}`
		});
	}

	getCardActions(id) {
		return restAPI({
			method: "GET",
			url: `/cards/${id}/actions`
		});
	}

	createCardComment(request) {
		return restAPI({
			method: "POST",
			url: `/cards/${request.id}/actions/comments`,
			data: request.data
		});
	}

	updateCardAction(request) {
		return restAPI({
			method: "PUT",
			url: `/actions/${request.id}`,
			data: request.data
		});
	}

	removeCardAction(id) {
		return restAPI({
			method: "DELETE",
			url: `/actions/${id}`
		});
	}
}

export const CardService = new CardApi();