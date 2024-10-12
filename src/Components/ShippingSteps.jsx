import { Steps, ConfigProvider} from "antd";
import PropTypes from 'prop-types'; 
import { useTranslation } from "react-i18next";

export default function ShippingSteps({state}) {
    const { t } = useTranslation();
    const items = [
      { title: t("Ticket Created") },
      { title: t("Package Received") },
      { title: t("Out For Delivery") },
      { title: t("Delivered") },
    ];
    let progress_color = "";
    let progress_num = "";
  
    switch (state) {
      case "TICKET_CREATED":
        progress_color = "#f9ba02"; // yellow
        progress_num = 0;
        break;
      case "PACKAGE_RECEIVED":
      case "NOT_YET_SHIPPED":
        progress_color = "#f9ba02"; // yellow
        progress_num = 1;
        break;
      case "CANCELLED":
        progress_color = "#e20613"; // red
        progress_num = 2;
        break;
      case "DELIVERED":
        progress_color = "#36B600"; // green
        progress_num = 3;
        break;
      case "DELIVERED_TO_SENDER":
      case "OUT_FOR_DELIVERY":
        progress_color = "#f9ba02"; // yellow
        progress_num = 2;
        break;
      default:
        progress_color = "#f9ba02"; // yellow
        progress_num = null;
        break;
    }
    return (
      <>
        <div>
          <ConfigProvider
            theme={{
              token: { colorPrimary: progress_color },
            }}
          >
            <Steps
              current={progress_num}
              labelPlacement="vertical"
              items={items}
              size="small"
            />
          </ConfigProvider>
        </div>
      </>
    );
  }

  
ShippingSteps.propTypes = {
  state: PropTypes.string,
  };
  
  