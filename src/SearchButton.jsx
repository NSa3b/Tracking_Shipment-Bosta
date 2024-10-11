import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, theme, Input, Typography } from "antd";

const { Title } = Typography;
const { useToken } = theme;
const { Search } = Input;
const onSearch = (value, _e, info) => {
  console.log(info?.source, value);
};

export default function SearchButton() {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  return (
    <>
      <Dropdown
        trigger={["click"]}
        dropdownRender={() => (
          <div style={contentStyle}>
            <Space style={{ padding: 30 }} direction="vertical">
              <Title level={5}>Track your shipment</Title>
              <Search placeholder="Track no." onSearch={onSearch} enterButton />
            </Space>
          </div>
        )}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Track Shipment
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
