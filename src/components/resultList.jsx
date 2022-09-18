import { lazy, Suspense } from "react";
import { FetchGame } from "./hooks";
// import { FetchRecommendations } from "./hooks";
const Result = lazy(() => import("./result"));

const ResultList = ({ selectedGame }) => {
	// const [gameID, setGameID] = useState(0);
	const { gameData, recommendations } = FetchGame(selectedGame);

	// useEffect(() => {
	// 	// Checks to make sure that the selected game has not been the same game
	// 	if (
	// 		typeof selectedGame !== "undefined" &&
	// 		selectedGame !== gameID &&
	// 		gameData.length !== 0
	// 	) {
	// 		setGameID(selectedGame);
	// 	}
	// }, [selectedGame, gameID, recommendations, gameData]);

	return (
		<div className="results">
			{selectedGame !== 0 && (
				<div>
					<h2>Search Results</h2>
					<div className="results-container">
						<div className="selected-game">
							<h3>Your game</h3>
							<Suspense fallback={<div>Loading Data...</div>}>
								<Result gameData={gameData} />
							</Suspense>
						</div>
						{recommendations && recommendations?.length !== 0 && (
							<div className="suggested-games">
								<h3>Game Recommendations</h3>
								<div className="suggested-list">
									{recommendations.map((game, index) => (
										<Suspense fallback={<div>Loading Data...</div>} key={index}>
											<Result gameData={game} />
										</Suspense>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default ResultList;
