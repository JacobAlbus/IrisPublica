import { Link } from "react-router-dom";
import "./home.css"

const Home = props => {
  return (
  <div class="row mt-5 d-flex align-items-stretch" id="home-page">
    
    <div class="col-lg-3 pt-2 me-3 ms-2 mt-2" id="about"> 
      <h3 align="center">About</h3>
      <p>IrisPublica is my personal website where I can document various projects
        I started (and sometimes finish). It is also a way for me to practice my web 
        development skills and share any interesting results I find in data analysis, 
        computer science, technology, and anything else. You can contact me at my email 
        address: JacobAlbus20@gmail.com. You can also checkout my 
        <a id="git-link" href="https://github.com/JacobAlbus"> GitHub</a>. </p>
    </div>

    <div class="col-lg-8 pt-2 mt-2" id="article-col">
      <h3 align="center">Articles</h3>

      <div class='container p-3 mb-4' id="article">
        <Link to="/articles/dnc-sentiment-analysis">
          <div class='row justify-content-center mb-3'>
            <img class="img-fluid" src="img/dnc-sentiment-analysis/candidates.jpg" alt="" width='1200' height='500'></img>
          </div>
        </Link>
        <h5 class='bold'> 2020 DNC Sentiment Analysis | <small> Oct 6, 2020 </small></h5>
      </div>

      <div class='container p-3 mb-4' id="article">
        <Link to="/articles/text-generation">
          <div class='row justify-content-center mb-3'>
            <img class="img-fluid" src="img/text-generation/articleCover.jpg" alt="" width='800' height='500'></img>
          </div>
        </Link>
        <h5 class='bold'> Text Generation: Song Lyrics | <small> Sep 9, 2021 </small></h5>
      </div>

      <div class='container p-3 mb-4' id="article">
        <Link to="/articles/jjba-strategy-game">
          <div class='row justify-content-center mb-3'>
            <img class="img-fluid" src="img/jjba-strategy-game/jjbaThumbnail.jpg" alt="" width='800' height='500'></img>
          </div>
        </Link>
        <h5 class='bold'> JoJo's Bizzare Strategy Game | <small> Jan 19, 2022 </small></h5>
      </div>

    </div>
  </div>
  );
};

export default Home;
