import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/Card/ProductCard';

function App() {
  return (
    <div className="App">
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
