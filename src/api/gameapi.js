//const url = "http://13.239.26.34:4000/";
const url = "http://192.168.0.5:4000";

// Access to fetch at 'http://13.239.26.34:4000//search?title=counter' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

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
