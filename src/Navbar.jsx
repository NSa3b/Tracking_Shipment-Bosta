import Logo from "./assets/imgs/bosta_logo_english.svg";
import SearchButton from "./SearchButton";
import LangButton from "./LangButton";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full h-20 border border-b-1 border-b-gray-100 lg:px-20 sm:px-10 px-5 py-5">
        <div className="lg:flex hidden justify-between items-center h-full">
          <div className="h-full">
            <img src={Logo} className="h-full"></img>
          </div>
          <div className="flex lg:gap-10 gap-4 font-bold text-sm lg:text-base">
            <a>Home</a>
            <a>Prices</a>
            <a>Call Sales</a>
          </div>
          <div className="flex lg:gap-10 gap-4 font-bold text-sm lg:text-base">
            <SearchButton></SearchButton>
            <a>Login</a>
            <LangButton></LangButton>
          </div>
        </div>

        {/* Small Screen Nav */}
        <div className="flex lg:hidden justify-between items-center h-full">
          <div className="h-full">
            <img src={Logo} className="h-full"></img>
          </div>
          <div className="flex items-center lg:gap-10 gap-4 font-bold text-sm lg:text-base">
            <SearchButton></SearchButton>
            <LangButton></LangButton>
            <Button onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer onClose={onClose} open={open}>
              <div className="flex flex-col gap-5 font-bold">
                <a>Home</a>
                <hr></hr>
                <a>Prices</a>
                <hr></hr>
                <a>Call Sales</a>
                <hr></hr>
                <Button type="primary">Login</Button>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}
