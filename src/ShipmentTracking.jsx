import { Steps, ConfigProvider, Table, Button } from "antd";
import vector from "./assets/imgs/vector.jpg";
const items = [
  { title: "Ticket Created" },
  { title: "Package Received" },
  { title: "Out For Delivery" },
  { title: "Delivered" },
];

const dataSource = [
  {
    key: "1",
    Branch: "Mike",
    Date: 32,
    Time: "10 Downing Street",
    Details: "10 Downing Street",
  },
  {
    key: "2",
    Branch: "Mike",
    Date: 32,
    Time: "10 Downing Street",
    Details: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Branch",
    dataIndex: "Branch",
    key: "Branch",
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
  },
  {
    title: "Time",
    dataIndex: "Time",
    key: "Time",
  },
  {
    title: "Details",
    dataIndex: "Details",
    key: "Details",
  },
];
const state = "CANCELLED";
const stage = "Out For Delivery";
let progress_color = "";
let progress_num = "";

if (state == "CANCELLED") {
  progress_color = "#e20613";
} else if (state == "DELIVERED") {
  progress_color = "#36B600";
} else {
  progress_color = "#f9ba02";
}

if (stage == "Package Received") {
  progress_num = 1;
} else if (stage == "Out For Delivery") {
  progress_num = 2;
} else if (stage == "Delivered") {
  progress_num = 3;
} else {
  progress_num = 0;
}

export default function ShipmentTracking() {
  return (
    <>
      <div className="border border-1 border-gray-100 rounded-lg p-5 mb-8">
        <div className="flex flex-wrap gap-5 items-center justify-between">
          <div className="flex flex-col justify-start">
            <p className="text-sm text-neutral-500">Shipment no. 123456</p>
            <p className="font-bold">shipment Cancelled</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-sm text-neutral-500">latest Update</p>
            <p className="font-bold">Mon 06/04 at 5:33pm</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-sm text-neutral-500">Provider Name</p>
            <p className="font-bold">SOUQ.COM</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-sm text-neutral-500">Promised delivery date</p>
            <p className="font-bold">3 Jan 2024</p>
          </div>
        </div>
        <hr className="mx-[-1.2rem] my-5"></hr>
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
      </div>
      <div className="grid md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <p className="font-semibold mb-4">Shipping Details</p>
          <Table
            className="border rounded-lg"
            dataSource={dataSource}
            columns={columns}
          />
        </div>
        <div className="md:col-span-4">
          <p className="font-semibold mb-4">Shipping Address</p>
          <div className="w-full p-5 border rounded-lg bg-[#fbfbfb] mb-2 ">
            <p className="font-medium ">
              Embaba tal3at 7arb street,el3omal city beside elprince, Apt no.17
              , Cairo
            </p>
          </div>
          <div className="w-full p-5 border rounded-lg flex items-center justify-center">
          <div className="w-1/3 min-w-20 max-w-44">
            <img src={vector} className=""></img>
          </div>
          <div className="grow">
            <p className="font-bold mb-2 ">Do you have a problem with your shipment?!</p>
            <Button type="primary" className="rounded-xl w-full py-2 h-auto">Report a Problem</Button>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}
