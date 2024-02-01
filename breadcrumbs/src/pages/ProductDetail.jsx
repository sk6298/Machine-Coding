import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <h1>ProductDetail</h1>
      {product ? (
        <div className="products ">
          <div style={{flex:1}}>
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div style={{flex:1}}>
            <h3>{product.title}</h3>
            <div>{product.description}</div>
            <p>$ {product.price}</p>
          </div>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default ProductDetail;
