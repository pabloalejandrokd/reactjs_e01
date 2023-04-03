import logo from './logo.svg';
import './App.css';
import ContactCardComponent from './components/contact_card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactCardComponent></ContactCardComponent>
      </header>
    </div>
  );
}

export default App;
