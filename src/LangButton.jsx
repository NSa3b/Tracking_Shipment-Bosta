
import { Dropdown, Space, message } from "antd";

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

const items = [
  {
    key: "1",
    label:'English' 
  },
  {
    key: "2",
    label: "العربية",
  },
];

export default function LangButton() {
  return (
    <>
      <Dropdown menu={{items,onClick,}} placement="bottomLeft" >
        
        <a className="text-[#e20613]" onClick={(e) => e.preventDefault()}>
          <Space>
            ENG  
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
