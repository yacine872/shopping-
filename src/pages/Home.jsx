import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>CyberShop 2045</h2>
      <p>Your one stop shop for all things cyber</p>
      <button onClick={() => navigate("/shopping")}>See More</button>
    </div>
  );
}

export default Home;
