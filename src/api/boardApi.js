import restAPI from "@/config/http";

export default class BoardApi {
    getBoard(id) {
		return restAPI({
            method: "GET",
			url: `/boards/${id}`
		});
	}

	createBoard(request) {
		return restAPI({
            method: "POST",
			url: `/boards`,
			data: request
		});
	}

	updateBoard(request) {
		return restAPI({
            method: "PUT",
			url: `/boards/${request.id}`,
			data: request.data
		});
	}

	getBoardActions(id) {
		return restAPI({
            method: "GET",
			url: `/boards/${id}/actions`
		});
	}

	removeBoard(id) {
		return restAPI({
            method: "DELETE",
			url: `/boards/${id}`
		});
	}
}

export const BoardService = new BoardApi();