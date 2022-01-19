import './App.scss';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2>Products</h2>
            <Card />
          </div>
          <div className="col-4">
            <h2>Shopping Cart</h2>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
