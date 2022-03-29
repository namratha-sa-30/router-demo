import React from "react";
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const handleNav = (routeTo) => {
        navigate(`/${routeTo}`)
    }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => {handleNav('shop')}}>Shop</button>
      <button onClick={() => {handleNav('item')}}>Item</button>
    </div>
  );
}

export default Home;
