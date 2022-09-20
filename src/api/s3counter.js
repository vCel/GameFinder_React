// Gets the Counter of the visit
export const GetCounter = async () => {
    const url = "/api/counter?key=counter";
	return await fetch(url, {
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