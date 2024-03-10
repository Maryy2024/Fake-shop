import { useEffect, useState } from 'react';
import { Product } from './../types/Product'




export const useCrud = (url: string) => {
const [products, setProducts] = useState<Product[]>([])

useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        url
      );
      const data = await response.json();
      setProducts([...data].map(product => ({...product, quantity: 0})));
    }

    fetchData();
  },[]);

  return {products, setProducts}
}

  