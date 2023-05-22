import React from "react";
import {useGlopalContext} from "./context";
import Loading from "./Loading";
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";


function App() {
  const {isLoading}=useGlopalContext();
  return (
    <div className="App">
        {isLoading ? <Loading /> :
        <>
        <Navbar />
        <CartContainer />
        </>
}
    </div>
  );
}

export default App;
