import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/Card/ProductCard';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductCard
        title={'Iphone XR'}
        cardBody={'Cuerpo del producto'}
        actionButton={'Comprar'}
        price={'$1000'}
      />
    </div>
  );
}

export default App;
