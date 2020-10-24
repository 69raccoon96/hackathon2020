import './App.css';
import './Register.js'
import Register from "./Register";
import Main from "./Main";
import Categories from "./Categories.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Categories></Categories>
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
