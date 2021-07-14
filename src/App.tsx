// import { greet } from "./utils/greet";
import React, { useState } from 'react';
import episodes from './episodes.json'
import Episodes from './components/Episodes'
import Header from './Header'
//import SearchBar from './components/SearchBar';

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);




function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEpisodes = episodes.filter((val) =>
  val.name.toLowerCase().includes(searchTerm.toLowerCase())||
  val.summary.toLowerCase().includes(searchTerm.toLowerCase()))

  
return (
    <>
    <Header/>
    <div>
      <input type="text"
      placeholder="Search..."
      onChange={(event)=>
      {setSearchTerm(event.target.value)}} />
      <p>Showing {filteredEpisodes.length}/{episodes.length} episodes</p>
    </div>
  
  {/* <SearchBar/> */}
  {filteredEpisodes.map(episode =><Episodes
  key={episode.id}
  name={episode.name}
  season={episode.season}
  number={episode.number}
  image={episode.image}
  summary={episode.summary}
  url={episode.url}
  />)}
  </>)}
     


export default App

    
