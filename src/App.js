import React, { useEffect, useState } from 'react';


import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

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
    </div>
  );
}

export default App;