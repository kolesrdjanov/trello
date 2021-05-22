import restAPI from "@/config/http";

export default class ListApi {
	getBoardLists(id) {
		return restAPI({
			method: "GET",
			url: `/boards/${id}/lists`
		});
	}

	/**
	 * TODO: We could've used /lists/{id}/{field} to
	 * update list position/name/etc.
	 */
	updateList(request) {
		return restAPI({
			method: "PUT",
			url: `/lists/${request.id}`,
			data: request.data
		})
	}

	createList(request) {
		return restAPI({
			method: "POST",
			url: "lists",
			data: request
		})
	}
}

export const ListService = new ListApi();