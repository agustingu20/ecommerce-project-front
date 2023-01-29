import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/Card/ProductCard';
import NavBar from './components/NavBar/NavBar';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';

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
      <CategoryComponent />
    </div>
  );
}

export default App;
