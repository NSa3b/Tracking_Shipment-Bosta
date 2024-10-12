import { useState,useEffect  } from "react";
import { useTranslation } from 'react-i18next';
import { ConfigProvider } from 'antd';

import Navbar from "./Navbar";
import ShipmentTracking from "./ShipmentTracking";

function App() {
 
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {colorPrimary: "#e20613",},
        }}
      >
        <Navbar></Navbar>
        <main className="lg:px-20 md:px-10 px-5 py-10">
        <ShipmentTracking></ShipmentTracking>
        </main>        
      </ConfigProvider>
    </>
  );
}

export default App;
