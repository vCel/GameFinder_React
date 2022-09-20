import "./stylesheets/App.css";
import Search from "./components/search.jsx";
import ResultList from "./components/resultList";
import { useState } from "react";
import Counter from "./components/counter";


function App() {
  const [selectedGame, setSelectedGame] = useState();
	document.title = "Game Finder";


	return (
		<div className="back">
			<div id="student-id">
				n10235035
			</div>
			<div className="App">
				<Search setSelectedGame={setSelectedGame} />
				<Counter/>
				<ResultList selectedGame={selectedGame} />
				
			</div>
			
		</div>
	);
}

export default App;
