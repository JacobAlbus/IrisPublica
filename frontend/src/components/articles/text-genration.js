import "./articles.css"

const TextGeneration = props => {

  return (
  <div class="container-fluid mb-3" id="nib">
    <h2>Text Generation Using Song Lyrics on Prediction Matrix</h2>
    <p><small>2021</small></p>
    <div class='row mb-3'>
      <img src="/img/text-generation/thumbnail.jpeg" width='1200' height='500'></img>
    </div>
    <div class="row">
      <p>In this post, I’m going to look at how the polarity and subjectivity of the language 
        used by the media affected polling during the race for the 2020 Democratic Presidential 
        Nominee. And I know, I’m a bit late as Joe Biden has already received the nomination, 
        but this hasn’t stopped many democrats and leftists from attempting to invalidate his 
        nomination on the basis of unfair media bias. I have taken it upon myself to investigate 
        these claims and perform sentiment analysis, looking for polarity and subjectivity in text, 
        on the language the media used when reporting on the four democratic front-runners: Joe Biden, 
        Bernie Sanders, Elizabeth Warren, and Pete Buttigieg.</p>  
    </div>
  </div>
  );
};

export default TextGeneration;