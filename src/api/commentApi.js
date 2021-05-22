import restAPI from "@/config/http";

export default class CommentApi {
    getComments(params) {
		return restAPI({
            method: "GET",
            params: params
		});
	}
}

export const CommentService = new CommentApi();