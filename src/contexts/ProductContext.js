import React , {useEffect, useState, createContext} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json()
      
      setProduct(data)
    };
    fetchProducts()
  }, [])

  return <ProductContext.Provider value={{products}}>
          {children}
    </ProductContext.Provider>
};

export default ProductProvider;
