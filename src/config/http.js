import axios from "axios";

const restAPI = axios.create({
	baseURL: "https://api.trello.com/1",
	params: {
		key: process.env.VUE_APP_TRELLO_KEY,
		token: process.env.VUE_APP_TRELLO_TOKEN
	}
});

export default restAPI;