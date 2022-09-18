import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ placeholder, data, setSelectedGame }) => {
	const [searchQuery, setSearchQuery] = useState([]);
	const [searchData, setSearchData] = useState([]);

	const updateQuery = (e) => {
		e.preventDefault();
		if (searchQuery !== "") {
			data(searchQuery)
				.then((list) => {
					setSearchData(list.results);
				})
				.catch(() => console.log("Not Found."));
			return;
		}
		setSearchData([]);
	};

	return (
		<div className="search-box">
			<div className="search-input">
				<form onSubmit={updateQuery}>
					<input
						type="text"
						placeholder={placeholder}
						onChange={(e) => setSearchQuery(e.target.value)}
						value={searchQuery}
					/>
					<button type="submit">
						<SearchIcon />
					</button>
				</form>
			</div>
			{searchData.length !== 0 && (
				<div className="search-results">
					<ul>
						{searchData.map((value, key) => {
							return (
								<li id="glist" key={key}>
									<button
										onClick={() => {
											setSelectedGame(value.id);
											setSearchData([]);
										}}
									>
										<div id="lt">{value.name}</div>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
