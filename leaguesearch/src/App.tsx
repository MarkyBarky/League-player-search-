import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';



function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState ({});
  const API_KEY = "RGAPI-caca577c-4b61-403a-9c9c-44e1ec691bfd";
  

  function searchForPlayer(){
    var apiCallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    
    axios.get(apiCallString).then((response) => {
      setPlayerData(response.data);
    }).catch((error)=>{
      console.log(error);
    });
  }

  console.log(playerData);


  return (
    <div className="App">
      <div className="Container">
        <h5>Mark's League of Legends player search</h5>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer()}>search for player</button>
      </div>
    </div>
  );
}

export default App;
