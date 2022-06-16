import React, { useEffect, useState } from 'react';


import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./components/Home"

function App() {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        let timer = setTimeout(() => {
            setIsLoading(false);
            return () => clearInterval(timer);
        }, 1000);
    }, []);
    return isLoading ? (
        <Loader />
    ) : (
    <div className="App text-gray-400 bg-gray-900 body-font">
<Navbar />
<Home/>
    </div>
  );
}

export default App;