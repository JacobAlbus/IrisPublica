import "./articles.css"

const jjbaStrategyGame = props => {
  return (
  <div class="container-fluid mb-3 mt-5" id="nib">
    <h2>JoJo's Bizzare Strategy Game</h2>
    <p><small>Janurary 19th, 2022</small></p>
    <div class='row mb-3'>
      <img src="/img/jjba-strategy-game/jjbaThumbnail.jpg" alt="" width='1200' height='500'></img>
    </div>
    
    <div class="row">
      <p>This is a turn based-strategy game I have been working on. Based on the hit series <i>JoJo's Bizzare Adventure </i> 
          play as your favorite characters in the most memorable fights. The full source code can be found  
          <a href="https://github.com/JacobAlbus/final-project-JacobAlbus"> here</a>.</p>
    </div>
  </div>
  );
};

export default jjbaStrategyGame;