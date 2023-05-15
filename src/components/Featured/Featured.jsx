import { Link } from "react-router-dom";
import "./Featured.css";


const Featured = () => {
  return (
    <div className="Featured">
      <h1 className="Heading"> FEATURED </h1>
      <div className="FeaturedCenter">
        <div className="FeaturedImg">
          <div className="overlay"></div>
          <img
            src="https://cdn.shopify.com/s/files/1/0534/2065/4791/files/AS23-78-_1.jpg?v=1683023888&width=1000"
            alt=""
          />
          <div className="content">
            <Link className="myBtn" to="/singlepage">
              Explore
            </Link>
          </div>
        </div>
        <div className="FeaturedImg">
          <div className="overlay"></div>
          <img
            src="	https://cdn.shopify.com/s/files/1/0534/2065/4791/files/AS23-79-_2.jpg?v=1683023896&width=600"
            alt=""
          />
          <div className="content">
          <Link className="myBtn" to="/singlepage">
              Explore
            </Link>
          </div>
        </div>
        <div className="FeaturedImg">
          <div className="overlay"></div>
          <img
            src="https://cdn.shopify.com/s/files/1/0534/2065/4791/files/AS23-51-_5.jpg?v=1683023811&width=600"
            alt=""
          />
          <div className="content">
          <Link className="myBtn" to="/singlepage">
              Explore
            </Link>
          </div>
        </div>
        <div className="FeaturedImg">
          <div className="overlay"></div>
          <img
            src="https://cdn.shopify.com/s/files/1/0534/2065/4791/files/AS23-49-_1.jpg?v=1683023804&width=600"
            alt=""
          />
          <div className="content">
          <Link className="myBtn" to="/singlepage">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
