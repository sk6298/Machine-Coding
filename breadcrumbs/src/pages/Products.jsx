import { useEffect, useState } from "react";
import './Products.css';
import {Link} from 'react-router-dom'
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {products ? (
        <div className="products ">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
                <p>$ {product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
