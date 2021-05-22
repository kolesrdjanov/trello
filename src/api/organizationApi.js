import restAPI from "@/config/http";
export default class OrganizationApi {
	getOrganization(id) {
		return restAPI({
			method: "GET",
			url: `/organizations/${id}`
		});
	}

	getOrganizationBoards(id, params = {}) {
		return restAPI({
			method: "GET",
			url: `/organizations/${id}/boards`,
			params: params
		})
	}
}

export const OrganizationService = new OrganizationApi();