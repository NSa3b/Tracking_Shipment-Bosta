import { useState } from "react";
import Navbar from "./Navbar";

import { ConfigProvider } from 'antd';
import ShipmentTracking from "./ShipmentTracking";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {colorPrimary: "#e20613",},
        }}
      >
        <Navbar></Navbar>
        <section className="lg:px-20 md:px-10 px-5 py-10">
        <ShipmentTracking></ShipmentTracking>
        </section>        
      </ConfigProvider>
      
      {/* <h1 className="text-3xl font-bold underline text-red-900">Hello world!</h1>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
