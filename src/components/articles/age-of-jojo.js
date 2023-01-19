import "../../styles/articles.css"

const ageOfJojo = props => {
  return (
  <div class="container-fluid mb-3 mt-5" id="nib">
    <div id="spacer">A</div>

    <h2>Age of Jojo</h2>
    <p><small>Janurary 18th, 2023</small></p>
    <div class='row mb-3'>
      <img src="/img/age-of-jojo/age_of_jojo_thumbnail.png" alt="" width='1200' height='500'></img>
    </div>

    <p><small>Artwork made by me in Gimp ;)</small></p>

    <div class="row">
      <p>Based off of the hit flash game Age of War and with inspiration from Jojo's Bizzare Adven ture, 
        send your favorite Jojo characters to battle and defeat the dastardly Dio! However, turrets were 
        taken out because they break the game and special events were removed to make the game balanced for 
        each side. The latter point is of importance since the original goal of this project was to create 
        an AI enemy that can beat the human player (or at the very least bring to a stalemate since the 
        "optimal" strategy is always to just copy the opponent's moves). In order to create a strong AI 
        enemy that can beat the human player, it thus became necessary to make both sides equal in power and 
        moves. You too can create your own enemy AI by either modifiying the AIController class or creating 
        your own derived class from the BaseController class. If you create your own derived class, just add it 
        to the BattleEngine class as necessary.  
        </p>
    </div>


    <h4 class="mt-2">Cinder</h4>
    <div class="row">
      <p>The project was built in C++ with cmake and the open-source library <a href="https://libcinder.org/">cinder</a>. Specifically, I used the 
        2D graphics library inside cinder. I developed this project on Windows 10 using Visual C++ 2015 and 
        Clion. You can setup a similar environment by downloading cinder for <a href="https://libcinder.org/download">Visual C++ 2015</a>, opening and 
        building it in Clion, then create a my-projects folder in the root directory. Also note that you may 
        need to set Visual Studio as your toolchain in Clion. Regardless, an already compiled version can be 
        downloaded and played <a href="https://drive.google.com/file/d/1LJViOPdfyQiCzAeNTDSMNe6w1YYcDtcU/view?usp=sharing">here</a> with no setup necessary.
      </p>
    </div>

    <h4 class="mt-2">AI</h4>
    <div class="row">
      <p>Currently, the AIController class picks how many units to send based on how much money it has, then 
        picks units with a 60% chance of Infantry, 30% chance of ranged slinger, and 10% chance of heavy. 
        I plan on training an AI using deep learning techniques.
      </p>
    </div>

  </div>
  );
};

export default ageOfJojo;