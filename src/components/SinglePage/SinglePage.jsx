import React from "react";
import "./SinglePage.css";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="singlePageInfo">
        <h2>Heading Goes here</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          numquam nam laborum! Recusandae ipsam ipsum cupiditate eum ut possimus
          cum accusantium maxime dolorum, adipisci corrupti, eligendi dolorem
          rerum doloribus officiis tempore voluptatibus suscipit quae incidunt
          fuga quia! Similique dignissimos, culpa aliquid vero cupiditate
          perferendis aspernatur consequatur odio numquam mollitia voluptatem
          accusantium repudiandae, cumque illum cum?
        </p>
        <hr />
        <div className="pricing">
          <span>$23,999</span>
          <span className="strike">$33,999</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
