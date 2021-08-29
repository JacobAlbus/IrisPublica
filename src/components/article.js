// import React, { useState, useEffect } from "react";
// import ArticleDataService from "../services/article-data-services";

// const Article = props => {

//   const initialArticleState = {
//     id: null,
//     title: "",
//     text: "",
//     img: "",
//   };

//   const [article, setArticle] = useState(initialArticleState);

//   const getArticle = id => {
//     ArticleDataService.get(id)
//       .then(response => {
//         setArticle(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   useEffect(() => {
//     getArticle(props.match.params.id);
//   }, [props.match.params.id]);

//   return (

//   <div class="container-fluid">
//     <h1>ARTICLE PAGE</h1>
//   </div>
//   );
// };

// export default Article;