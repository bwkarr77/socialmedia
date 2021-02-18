import logo from './logo.svg';
import './App.scss';

import NavBar from './components/NavBar.jsx';

import NavBarDemo from './components/navbars/NavBarDemo.jsx';
import NavBarLogged from './components/navbars/NavBarLogged.jsx';


function App() {

  const isloggedIn = false

  return (
    <div className="App">
      {isloggedIn ? (
        <NavBarLogged />
      ) : (
        <NavBarDemo />
      )}
    </div>
  );
}

export default App;
