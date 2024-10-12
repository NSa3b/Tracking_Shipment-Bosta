import { Dropdown, Space, message } from "antd";
import { useTranslation } from "react-i18next";

const items = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "ar",
    label: "العربية",
  },
];

export default function LangButton() {
  const { i18n } = useTranslation();

  // Function to handle language change
  const onClick = ({ key }) => {
    i18n.changeLanguage(key); 
    document.documentElement.dir = key === "ar" ? "rtl" : "ltr";
    localStorage.setItem('language', key);
  };
  return (
    <>
      <Dropdown menu={{ items, onClick }} placement="bottomLeft">
        <a className="text-[#e20613]" onClick={(e) => e.preventDefault()}>
          <Space>{i18n.language === "ar" ? "ENG" : "AR"}</Space>
        </a>
      </Dropdown>
    </>
  );
}
