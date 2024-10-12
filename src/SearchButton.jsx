import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, theme, Input, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { fetchData } from "./Redux/shipmentSlice";

const { Title } = Typography;
const { useToken } = theme;
const { Search } = Input;


export default function SearchButton() {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const onSearch = (value, _e, info) => {
    dispatch(fetchData(value));
  };

  return (
    <>
      <Dropdown
        trigger={["click"]}
        dropdownRender={() => (
          <div style={contentStyle}>
            <Space style={{ padding: 30 }} direction="vertical">
              <Title level={5}>{t("Track Shipment")}</Title>
              <Search
                placeholder={t("Track no.")}
                onSearch={onSearch}
                enterButton
              />
            </Space>
          </div>
        )}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {t("Track Shipment")}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
