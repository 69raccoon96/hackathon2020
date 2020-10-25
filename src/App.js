import './App.css';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="box">
                    <UpperRow></UpperRow>
                    <div className="middle-part-startpage">
                        <div className="middle-part-tet">
                            ИЩЕШЬ<br/>МАГАЗИН?</div>
                        <button className="middle-part-button">
                            <div className="middle-part-text">ищу!</div></button>
                    </div>
                    <div className="bottom-block">
                        <button className="bottom-button">
                            <div className="bottom-button-text">Любимые места</div>
                        </button>
                        <button className="bottom-button">
                            <div className="bottom-button-text">История посещений</div>
                        </button>
                    </div>
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
