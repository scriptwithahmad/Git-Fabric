import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <div className="ProductImg">
      <div className="ProductWrapper">
        <Link to="/page">
          <img
            src="https://www.sanasafinaz.com/media/catalog/category/1498X630-compressor.jpg"
            alt=""
          />
        </Link>
        <div className="ProductInfo">
          <h3>Ready to Wear</h3>
        </div>
      </div>
      <div className="ProductWrapper">
        <Link to="/page">
          <img
            src="https://www.sanasafinaz.com/media/catalog/category/Cambric-Vol-1-1498x630--.jpg"
            alt=""
          />
        </Link>
        <div className="ProductInfo">
          <h3>Unstitched Fabric</h3>
        </div>
      </div>
      <div className="ProductWrapper">
        <Link to="/page">
          <img
            src="https://www.sanasafinaz.com/media/catalog/category/accessories.jpg"
            alt=""
          />
        </Link>
        <div className="ProductInfo">
          <h3>Accessories</h3>
        </div>
      </div>
      <div className="ProductWrapper">
        <Link to="/page">
          <img
            src="	https://www.sanasafinaz.com/media/catalog/category/Kids-RTW-20220-March-Catag-banner.jpg"
            alt=""
          />
        </Link>
        <div className="ProductInfo">
          <h3>Kids</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
