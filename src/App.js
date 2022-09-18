import "./stylesheets/App.css";
import Search from "./components/search.jsx";
import ResultList from "./components/resultList";
import { useState } from "react";


function App() {
  const [selectedGame, setSelectedGame] = useState();
	document.title = "Game Finder";


	return (
		<div className="back">
			<div className="App">
				<Search setSelectedGame={setSelectedGame} />
				<ResultList selectedGame={selectedGame} />
        
			</div>
		</div>
	);
}

export default App;
