import React from "react";
import "./home.css";

const Home = ({ data }) => {
  return (
    <div className="home">
      {data.map((item, index) => (
  <div key={index} className="position" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
    <img className="image" src={item.image} alt={item.title} />
    <div className="information">
      <p className="info">{item.info}</p>
      <h1 className="title">{item.title}</h1>
      <span className="span"></span><p className="text">{item.text}</p>
      <button className="button">VIEW PORTFOLIO</button>
    </div>
  </div>
))}
<button className="more">
    LOAD MORE <i class="fa-solid fa-spinner"></i>
</button>
    </div>
    
  );
};

export default Home;
