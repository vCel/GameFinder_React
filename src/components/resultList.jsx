import { lazy, Suspense } from "react";
import { FetchGame } from "./hooks";
// import { FetchRecommendations } from "./hooks";
const Result = lazy(() => import("./result"));

const ResultList = ({ selectedGame }) => {
	// Fetch data from the custom hook for the game details and recommendations
	const { gameData, recommendations } = FetchGame(selectedGame);

	return (
		<div className="results">
			{selectedGame && (
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
