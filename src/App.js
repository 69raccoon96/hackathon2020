import './App.css';
import './Register.js'
import Register from "./Register";
import Main from "./Main";
import Categories from "./Categories.js"
import Favorite from "./Favorite";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Favorite></Favorite>
      </header>
    </div>
  );
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <Register />;
    }
    return <Main />;
}

export default App;
