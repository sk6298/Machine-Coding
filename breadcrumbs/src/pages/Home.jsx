import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const top10Products = data.products.splice(0,10);
        setProducts(top10Products);
      });
  }, []);
  return (
    <div>
        <h1>Home</h1>
        {products.length ? (
          <>
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
        <div style={{textAlign:"center",padding:'10px 20px'}}><button style={{width:'40%',padding:'20px'}}>
          <Link to={'/products'}>Load More</Link>
          </button></div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Home