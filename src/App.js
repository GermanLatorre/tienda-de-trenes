
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components.js/NavBar';
import ItemListContainer from './components.js/ItemListContainer';
import CartWidget from './components.js/CartWidget';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer title="Todo Deportes"/>
        <CartWidget/>
      </header>
    </div>
  );
}

export default App;
