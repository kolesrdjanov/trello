import restAPI from "@/config/http";

export default class UserApi {
	getMe(params={}) {
		return restAPI({
			method: "GET",
			url: "/members/me",
			params: params
		});
	}
}

export const UserService = new UserApi();