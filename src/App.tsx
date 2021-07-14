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

  const [dropDown, setDropDown] = useState('')
  
  const selector = episodes.filter((val)=>
  val.name === dropDown)

  function allEpisodeDrop(){
    if (dropDown === ""){
      return filteredEpisodes
    }
    else {
      return selector
    }
  }  

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
  <label htmlFor = "episode">Choose an episode </label> 
  <select name= "episode" id= "episode"
  onChange={(event)=>
  {setDropDown(event.target.value)}}>
    <option value= "">...</option>
    {episodes.map(val=><option key= {val.name}>{val.name}</option>)}
  </select>

  {/* <SearchBar/> */}
  {allEpisodeDrop().map(episode =><Episodes
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

    
