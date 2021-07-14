import React, { useState } from "react";
// import Episodes from './Episodes'
import episodes from "./episodes.json";
//import filterEpisode from '../utils/filterEpisodes'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChangeToSearchBox(event) {
    setSearchTerm(event.target.value);
  }

  function filmTitleMatchesSearchTerm(film) {
    return film.title.includes(searchTerm);
  }

  const filteredFilms = episodes.filter(filmTitleMatchesSearchTerm);

  return (
    <div>
      <input onChange={handleChangeToSearchBox} />
      <p>You are currently searching for "{searchTerm}"</p>
      <h1>Matching films</h1>
      <FilmList episodes={filteredFilms} />
      <h1>ALL FILMS</h1>
      <FilmList episodes={episodes} />
    </div>
  );
}
function FilmList(props) {
  return (
    <div>
      <p>There are {props.episodes.length} films</p>
      {props.films.map((film) => (
        <div className="film">
          <h4>
            {film.title} - {film.original_title}
          </h4>
        </div>
      ))}
      <hr />
    </div>
  );
}

// interface searchProps {
//     setSearchTerm(term:string):void
//     searchTerm:string
// }
// function SearchBar(props:searchProps):JSX Element {
//     const [searchTerm, setSearchTerm] = useState('')

//     const episodeCount = filterEpisode(mapArray, props.searchTerm)
//     return (
//         <div className="searchBar">
//             <input>
//             className="input"
//             type="text"
//             placeholder="Search..."
//             onChange={(event)=>{
//                 props.setSearchTerm(event.target.value)}}
//             </input>
//         </div>
//     )
// }

export default SearchBar;
