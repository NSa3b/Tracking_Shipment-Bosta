import LogoEn from "../assets/imgs/bosta_logo_english.svg";
import LogoAr from "../assets/imgs/bosta_logo_arabic.svg";
import SearchButton from "./SearchButton";
import LangButton from "./LangButton";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const logoSrc = currentLanguage === 'ar' ? LogoAr : LogoEn;

  return (
    <>
      <div className="w-full h-20 border border-b-1 border-b-gray-100 lg:px-20 sm:px-10 px-5 py-5">
        <div className="lg:flex hidden justify-between items-center h-full">
          <div className="h-full">
            <img src={logoSrc} className="h-full"></img>
          </div>
          <div className="flex lg:gap-10 gap-4 font-bold text-sm lg:text-base">
            <a>{t("Home")}</a>
            <a>{t("Prices")}</a>
            <a>{t("Call Sales")}</a>
          </div>
          <div className="flex lg:gap-10 gap-4 font-bold text-sm lg:text-base">
            <SearchButton></SearchButton>
            <a>{t("Login")}</a>
            <LangButton></LangButton>
          </div>
        </div>

        {/* Small Screen Nav */}
        <div className="flex lg:hidden justify-between items-center h-full">
          <div className="h-full">
            <img src={logoSrc} className="h-full"></img>
          </div>
          <div className="flex items-center lg:gap-10 gap-4 font-bold text-sm lg:text-base">
            <SearchButton></SearchButton>
            <LangButton></LangButton>
            <Button onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer onClose={onClose} open={open}>
              <div className="flex flex-col gap-5 font-bold">
                <a>{t("Home")}</a>
                <hr></hr>
                <a>{t("Prices")}</a>
                <hr></hr>
                <a>{t("Call Sales")}</a>
                <hr></hr>
                <Button type="primary">{t("Login")}</Button>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}
