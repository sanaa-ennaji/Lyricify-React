import "./App.css";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SongPage from "./pages/SongPage";

// function App() {
//   return <Dashboard />;
// }


// import React, { useEffect, useState } from "react";
// import AllMusic from "./components/Music/AllMusic";
// import MusicDetail from './components/Music/MusicDetail';
// import './App.css';
// import { Routes, Route, Link } from 'react-router-dom';

function App() {

  const [artistData, setArtistData] = useState(null);
  const [lyricsData, setLyricData] = useState(null);
  const [TitleData, setTitleData] = useState(null);
  const [trackData, setTrackData] = useState(null);
  
  const apiKey = 'b432eb6538ee6ef46f930205d3ecf427';

  useEffect(() => {

    fetchArtistData('artistName'); 
    fetchLyricData('lyric');
    fetchTitleData('title');
    fetchTrackData();

  }, []);

  const fetchArtistData = (artistName) => {
    fetch(
      `https://cors.eu.org/http://api.musixmatch.com/ws/1.1/track.search?q_artist=&apikey=${apiKey}`
   
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching artist data:', error);
      });
  };

  const fetchLyricData = (lyric) => {
fetch(
  `https://cors.eu.org/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=kill&apikey=${apiKey}`

)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
      .catch((error) => {
        console.error('Error fetching lyrics data:', error);
      });
  };

  const fetchTitleData = (title) => {
    fetch(
      `https://cors.eu.org/http://api.musixmatch.com/ws/1.1/track.search?q_track=kill&apikey=${apiKey}`
    
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
          .catch((error) => {
            console.error('Error fetching lyrics data:', error);
          });
      };

      const fetchTrackData = () => {
        fetch(`https://cors.eu.org/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=555&apikey=${apiKey}`
      )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setTrackData(data);
          })
          .catch((error) => {
            console.error('Error fetching track data:', error);
          });
      };
    
  

  return (
    <div className="App">
        <div className="flex justify-start w-[80%] mx-auto py-4">
            <h1 className="text-black font-bold font-serif text-4xl">MUSIC</h1>
        </div>

        <Routes>
            <Route path="/AllMusic" element={<AllMusic />}/>
            <Route path="/MusicDetail" element={<MusicDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
