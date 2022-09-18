import { useEffect, useState } from "react";
import { GetGame } from "../api/gameapi";

// Fetches game information and recommendations from the API Mashup
export const FetchGame = (gameid) => {
	const [gameData, setGameData] = useState([]);
	const [recommendations, setRecommendation] = useState([]);

	useEffect(() => {
		const fetchData = async (gamelist) => {
			if (gamelist.constructor === Array) {
				// Randomly picks 4 games out of the suggestions
				const pickSuggestions = gamelist
						?.sort((a, b) => 0.5 - Math.random())
						.slice(0, 4);

				// Uses promises to asynchronously retrieve data from the list of games
				Promise.all(
					pickSuggestions?.map(
						async (gameid) => await GetGame(gameid).then((_) => _.results)
					)
				).then((data) => {
					setRecommendation(data);
				});
			}
		};

		// Checks if the game ID exists
		if (gameid && typeof gameid !== "undefined") {
			GetGame(gameid).then((data) => {
				setGameData(data?.results);
				fetchData(data?.results?.recommendations);
			});
		}
	}, [gameid]);

	return { gameData, recommendations };
};