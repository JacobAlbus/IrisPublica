import "./articles.css"
import { Link } from "react-router-dom";

const TextGeneration = props => {
  return (
  <div class="container-fluid mb-3 mt-5" id="nib">
    <div id="spacer">A</div>

    <h2>Text Generation Using Song Lyrics on Prediction Matrix</h2>
    <p><small>September 9th, 2021</small></p>
    <div class='row mb-3'>
      <img src="/img/text-generation/articleCover.jpg" alt="" width='1200' height='500'></img>
    </div>
    <div class="row">
      <p>This post will mainly cover the methodology and techniques used to generate the song lyrics.
        The text generator web app can be found at this <Link to={"/text-generator"}>Link</Link> </p>  
    </div>

    <h4 class="mt-2" id="header">The Prediction Matrix:</h4>
    <div class="row">
      <p>So, given a string of text such as "I licked a banana. I then licked a strawberry", the algorithm
        will first parse out the words then group them into triples. So in our case, we would be given the
        set: [(I, licked, a), (licked, a, banana), (a, banana, I), (banana, I, then), (I, then, licked),
        (then, licked, a), (licked, a, strawberry)]. From here, the set of triples is then converted into
        a map (or a dictionary in our case since we're using Python) with the first two words in the triples
        acting as the key and the value for each key being another map/dictionary with the third word mapped
        to the number of times it follows the first two words</p>

      <p>Concretely, this would look like:</p>
      <p>[('I', 'licked'): ['a': 1], <br></br>
          ('licked', 'a'): ['banana': 1, 'strawberry': 1], <br></br>
          ('a', 'banana'): ['I': 1], <br></br>
          ('banana', 'I'): ['then': 1], <br></br>
          ('I', 'then'): ['licked': 1], <br></br>
          ('then', 'licked'): ['a': 1]]</p>

      <p>If also included the string of text "I licked a pineapple. I licked an apple", our prediction 
        matrix would then look like:</p>
        <p>[('I', 'licked'): ['a': 2, 'an': 1], <br></br>
          ('licked', 'a'): ['banana': 1, 'strawberry': 1, 'pineapple': 1], <br></br>
          ('licked', 'an'): ['apple': 1], <br></br>
          ('a', 'banana'): ['I': 1], <br></br>
          ('a', 'pineapple'): ['I': 1], <br></br>
          ('pineapple', 'I'): ['licked': 1], <br></br>
          ('banana', 'I'): ['then': 1], <br></br>
          ('I', 'then'): ['licked': 1], <br></br>
          ('then', 'licked'): ['a': 1]]</p>
    </div>

    <h4 class="mt-2" id="header">Methodology:</h4>
    <div class="row">
      <p>We can then pick a random key from the prediction matrix and probabilistically choose a
        value from the dictionary that is assigned to that key. So, for instance, if we were to pick the key
        ('I', 'licked') we would then have a 2/3 chance of picking 'a' as the next word in the song and a 1/3
        chance of picking 'an' as the next word in the song. After we pick, we then form a new key. So, if we
        picked 'a' as the next word, we would then have the key ('licked', 'a') and then have a 1/3 chance of
        picking 'banana', 'strawberry', and 'pineapple'. We continue this process of probabilistically picking
        the next word based on the previous key word pair and forming new key word pairs until we reach the 
        requested song length.</p>
    </div>
  </div>
  );
};

export default TextGeneration;