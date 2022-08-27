import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {action, originals} from './urls'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Orginals'/>
        <RowPost  url={action} title='Action' isSmall/>

    </div>
  );
}

export default App;
//calling the web services to get api data as real-time.It is in the form of json
// lazy loading, only brings the data and no html or css.first brings the design, the data will be brought parts by parts. 
//www.google.com= a get method
//we use axios to call the web service here, easy error handling.
//TMDB=the movie database-to get data related to movie 
//each an devery request to the server should have an api key.
//studied how to take the movie data from a third party web service such as tmdb.