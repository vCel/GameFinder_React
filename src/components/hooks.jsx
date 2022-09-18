import { useEffect, useState } from "react";
import { GetGame } from "../api/gameapi";

export const FetchGame = (gameid) => {
	const [gameData, setGameData] = useState([]);
	const [recommendations, setRecommendation] = useState([]);
	//
	useEffect(() => {
		const fetchData = async (gamelist) => {
			if (gamelist.constructor === Array) {
				const pickSuggestions = gamelist
						?.sort((a, b) => 0.5 - Math.random())
						.slice(0, 4);
				Promise.all(
					pickSuggestions?.map(
						async (gameid) => await GetGame(gameid).then((_) => _.results)
					)
				).then((data) => {
					console.log(data);
					setRecommendation(data);
				});
			}
		};

		if (gameid && typeof gameid !== "undefined") {
			GetGame(gameid).then((data) => {
				setGameData(data?.results);
				fetchData(data?.results?.recommendations);
			});
		}
	}, [gameid]);

	return { gameData, recommendations };
};

export const FetchRecommendations = (gamelist) => {
	const [gameData, setGameData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			Promise.all(
				gamelist.map(
					async (gameid) => await GetGame(gameid).then((_) => _.results)
				)
			).then((data) => {
				setGameData(data);
			});
		};

		if (gamelist.length !== 0) {
			fetchData();
		}
	}, [gamelist]);

	return gameData;
};

export const ChooseGames = (gameData) => {
	useEffect(() => {
		console.log(gameData);
	}, [gameData]);

	return gameData;
};
