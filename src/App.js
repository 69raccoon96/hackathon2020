import './App.css';
import './Register.js'
import Register from "./Register";
import Main from "./Main";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Register></Register>
          {/*<div className="box">*/}
          {/*    <UpperRow></UpperRow>*/}
          {/*    <div className="middle-part-startpage">*/}
          {/*        <div className="middle-part-tet">*/}
          {/*            ИЩЕШЬ<br/>МАГАЗИН?</div>*/}
          {/*        <button className="middle-part-button">*/}
          {/*            <div className="middle-part-text">ищу!</div></button>*/}
          {/*    </div>*/}
          {/*    <div className="bottom-block">*/}
          {/*        <button className="bottom-button">*/}
          {/*            <div className="bottom-button-text">Любимые места</div>*/}
          {/*        </button>*/}
          {/*        <button className="bottom-button">*/}
          {/*            <div className="bottom-button-text">История посещений</div>*/}
          {/*        </button>*/}
          {/*    </div>*/}
          {/*</div>*/}
      </header>
    </div>
  );
}

export default App;
