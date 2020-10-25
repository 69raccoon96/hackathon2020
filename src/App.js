import './App.css';
import Categories from "./Categories.js"
import Favorite from "./Favorite.js"
import Register from "./Register.js"
import Main from "./Main";
import Map from "./Map.js"
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="box">
                    <Main></Main>
                </div>
            </header>
        </div>
    );
}
const UpperRow = ({ logged }) => {
    if (true) {
        return (
            <div className="upper-row">
                <div className="not-auth-box">
                    <div className="not-auth-text">ВЫ АВТОРИЗОВАНЫ</div>

                </div>
                <button className="not-auth-button">
                    <span className="not-auth-button-text">ИМЯ</span>
                </button>
            </div>
        );
    }
    return (
        <div className="upper-row">
            <div className="not-auth-box">
                <div className="not-auth-text">
                    ВЫ НЕ АВТОРИЗОВАНЫ
                </div>

            </div>
            <button className="not-auth-button">
                <span className="not-auth-button-text">ВОЙТИ</span>
            </button>
        </div>
    );
};
export default App;
