import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="box">
              <UpperRow></UpperRow>
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
                    <span className="not-auth-button-text">Имя</span>
                </button>
            </div>
        );
    }
    return (
        <div className="upper-row">
        <div className="not-auth-box">
            <div className="not-auth-text">ВЫ НЕ АВТОРИЗОВАНЫ</div>

        </div>
            <button className="not-auth-button">
                <span className="not-auth-button-text">ВОЙТИ</span>
            </button>
        </div>
    );
};
export default App;
