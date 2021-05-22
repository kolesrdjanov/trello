import restAPI from "@/config/http";

export default class BatchApi {
    batch(params) {
		return restAPI({
            method: "GET",
			url: "/batch",
            params: params
		});
	}
}

export const BatchService = new BatchApi();