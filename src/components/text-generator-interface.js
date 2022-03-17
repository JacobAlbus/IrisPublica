import TextGenerationDataServices from "../services/text-generation-data-services"
import React, { useState } from "react";
import "./articles/articles.css"

const TextGeneratorInterface = props => {

  // const [lyrics, setLyrics] = useState("Set how long you want the song to be in the Song Length input box and select the artist in the Artist box, or don't and use 50 word song length with Kanye West default");
  const [lyrics, setLyrics] = useState("Backend is down indefinitley due to cost. Sorry.")
  const [artist, setArtist] = useState("Kanye West")
  const [songLength, setSongLength] = useState(50);

  const GenerateLyrics = () => {
    TextGenerationDataServices.getLyrics(songLength, artist)
      .then(response => {
        setLyrics(response.data.lyrics);
      });
  }

  const updateSongLength = event => {
    setSongLength(event.target.value);
  }

  const updateArtist = event => {
    setArtist(event.target.value);
  }

  return (
  <div class="container-fluid mb-3" id="nib">
    <div id="spacer">A</div>
    <h2 class="mb-3">Text Generation Using Song Lyrics on Prediction Matrix</h2>

    <div class="row">
      <div class="col ">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Song Length</span>
          <input onChange={updateSongLength} type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
        </div>
      </div>
      <div class="col">
        <select onChange={updateArtist} class="form-select" aria-label="Default select example">
          <option value="Kanye West">Kanye West</option>
          <option value="Taylor Swift">Taylor Swift</option>
          <option value="Queen">Queen</option>
          <option value="The Beatles">The Beatles</option>
        </select>
      </div>
      <div class="col">
        <button type="button" class="btn btn-dark">Generate Lyrics</button>
      </div>
    </div>

    <div class="row">
      <p>{lyrics}</p>  
    </div>

  </div>
  );
};

export default TextGeneratorInterface;