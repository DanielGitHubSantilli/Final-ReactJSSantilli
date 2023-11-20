import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">    
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'Productos por categoría'}/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<h1>404 error</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;