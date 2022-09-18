import SearchBar from "./searchbar";
import { GetList } from "../api/gameapi";

const Search = ({setSelectedGame}) => {
    return (
        <div className="search">
            <div className='page-title'>
                <h1>
                Find me similar games to ...
                </h1>
            </div>
            
            <div className="search-panel">
                <SearchBar placeholder="Search" data={GetList} setSelectedGame={setSelectedGame}/>
            </div>
            
        </div>
    )
}

export default Search;