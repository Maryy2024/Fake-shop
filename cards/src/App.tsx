import React, { useEffect, useState } from "react";
import { Product } from "./types/Product";
import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { useCrud } from './hook/useCrud';

function App() {


  const [totQuantity, setTotQuantity] = useState<number>(0);
  const[totPrice, setTotPrice] = useState<number>(0);

  const {products, setProducts} = useCrud("https://fakestoreapi.com/products")

  

  useEffect(() => {
    setTotQuantity(products.reduce((acc, product) => acc + product.quantity, 0));
    setTotPrice(products.reduce((acc, product)=> acc + product.price * product.quantity, 0));
  }, [products])


  return (
    <div>
    <div className="container-fluid">
    <Navbar totQuantity={totQuantity} price={totPrice}/>
      <div className="display-flex">
        {products.map((product, index) => (
          <Card item={product} index={index} setProducts={setProducts}/>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;