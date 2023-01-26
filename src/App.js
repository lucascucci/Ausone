import NavBar from "./components/NavBar/NavBar";
import Home from './components/Home/Home';
import ItemListContainer from './components/routes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/routes/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/routes/Cart/Cart';
import CartProvider from './context/CartContext';
import Error from '../src/components/routes/Error/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/routes/CheckOut/Checkout';
import './App.css';

function App(){
  return (
    <CartProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>}></Route>
            <Route exact path="/productos" element={<ItemListContainer/>}></Route>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
            <Route exact path='*' element={<Error/>}/>
            <Route exact path="/shopping" element={<Cart/>}></Route>
            <Route exact path="/checkout" element={<Checkout/>}></Route>
          </Routes>
        </BrowserRouter>
    </CartProvider>
  );
}
export default App;
