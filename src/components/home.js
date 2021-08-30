import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css"

const Home = props => {

  const initialArticlesState = {
    dates: ["May 14th, 2020", "August 8th, 2021", "March 15th, 2020"],
    titles: ["2020 DNC Sentiment Analysis", "Text Generation: Song Lyrics", "How Green are EV's?"],
    texts: ["AASFASFsdfafsafsaas", "ASFaswrfafdasfhtrjtr", "SADGSDYHESISOIETU"],
    imgs: ["img/dnc-sentiment-analysis/candidates.jpg", "img/dnc-sentiment-analysis/candidates.jpg", "img/dnc-sentiment-analysis/candidates.jpg"],
    ids: ["9514", "9140", "9145"]
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    var tempArticles = [];
    for (let i = 0; i < initialArticlesState["dates"].length; i++) {
      var newArticle = {
        date: initialArticlesState["dates"][i],
        title: initialArticlesState["titles"][i],
        img: initialArticlesState["imgs"][i],
        id: initialArticlesState["ids"][i] 
      };
      tempArticles.push(newArticle);
    }

    setArticles(tempArticles);
  }, []);

  return (

  <div class="row" id="home-page">
    <div class="col-lg-3 me-3 ms-2 align-self-start" id="about"> 
      <h3 align="center">About</h3>
      <p>IrisPublica is my personal website where I can document various projects
        I started (and sometimes finish). It is also a way for me to practice my web 
        development skills and share any interesting results I find in data analysis, 
        computer science, technology, and anything else. You can contact me at my email 
        address: JacobAlbus20@gmail.com</p>
    </div>
    <div class="col-lg-8" id="article-col">
      <h3 align="center">Articles</h3>
      <div class='container p-3 mb-4' id="article">
        <Link to="/articles/dnc-sentiment-analysis">
          <div class='row justify-content-center mb-3'>
            <img class="img-fluid" src="img/dnc-sentiment-analysis/candidates.jpg" width='1200' height='500'></img>
          </div>
        </Link>
        <h5 class='bold'> 2020 DNC Sentiment Analysis | <small> Oct 6, 2020 </small></h5>
      </div>
      <div class='container p-3 mb-4' id="article">
        <Link to="/articles/text-generation">
          <div class='row justify-content-center mb-3'>
            <img class="img-fluid" src="img/text-generation/articleCover.jpg" width='800' height='500'></img>
          </div>
        </Link>
        <h5 class='bold'> Text Generation: Song Lyrics | <small> 2021 </small></h5>
      </div>
      {/* {articles.map((article) => {
        return (
          <div class='p-3 mb-4 border'>
            <Link to="/articles/dnc-sentiment-analysis">
              <div class='row justify-content-center mb-3'>
                <img src={article.img} width='1200' height='500'></img>
              </div>
            </Link>
            <h5 class='bold'> {article.title} | <small> {article.date} </small></h5>
          </div>
        );
      })} */}
    </div>
  </div>
  );
};

export default Home;
