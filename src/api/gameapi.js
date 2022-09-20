//const url = "http://13.239.26.34:4000/"; http://192.168.0.5:4000
const url = "/api";

export const GetList = async (title) => {
	const nUrl = `${url}/search?title=${title.toLowerCase()}`;

	return await fetch(nUrl, {
		method: "GET",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			return resp.json();
		})
		.catch((err) => console.log(err));
};

export const GetGame = async (id) => {
	const nUrl = `${url}/game/${id}`;

	return await fetch(nUrl, {
		method: "GET",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			return resp.json();
		})
		.catch((error) => console.log(error.message));
};
