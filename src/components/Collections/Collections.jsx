import "./Collections.css";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <div className="Collections">
      <div className="CollectionCenter">
        <div className="CollectionInfo">
          <h2>our Collections</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            laborum asperiores quae animi, laudantium quos, accusantium cumque
            soluta hic vero, itaque nobis qui. Eveniet, non quis. Tempora
            dolorem esse illum vitae laborum eligendi deserunt?
          </p>
          <Link className="myBtn" to="/collection"> Check Out </Link>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0534/2065/4791/files/Images-with-text4.jpg?v=1683522226&width=400" alt="" />
      </div>
    </div>
  );
};

export default Collections;
