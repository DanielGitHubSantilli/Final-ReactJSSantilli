//import ReactDOM from 'react-dom/client';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import React, { useState, useEffect } from 'react';
import {db} from "./Config/firebase";
import { collection, getDocs } from "firebase/firestore";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import{BrowserRouter,Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart/Cart';


function App() {
  const [itemProduct, setItemProduct] = useState([]);
  const ProductCollectionRef = collection(db, "products");
  const greeting = "Bienvenidos a CAIDIM";

  useEffect(() => {
    const getItemProducts = async () => {
      const data = await getDocs(ProductCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setItemProduct(filteredData);
    }
    getItemProducts();
  }, [ProductCollectionRef]);

  return (
    <div>
      {itemProduct.map((item) => (
        <div key={item.id}>
          {/* Aquí puedes renderizar los datos del producto como desees */}
          <h2>item.name</h2>
          <p>item.description</p>
          
        </div>
      ))}
      
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
          <Route path='/Category/:CategoryID' element={<ItemListContainer greeting={greeting}/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/checkout' element={<checkOut/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
