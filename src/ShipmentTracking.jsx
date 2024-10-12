import {Button } from "antd";
import vector from "./assets/imgs/vector.jpg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { format } from 'date-fns';

import DetailsTable from './DetailsTable'
import ShippingSteps from "./ShippingSteps";

let parseLatestUpdate = (date)=>{
  if (!date) return '';
  const parsedDate = new Date(date);
  return format(parsedDate, "EEE d/M/yyyy 'at' h:mma");
}
let parsePromisedDate = (date)=>{
  if (!date) return '';
  const parsedDate = new Date(date);
  return format(parsedDate, 'MMM d yyyy');
}


let stateColor=(state)=>{
  if (state == "CANCELLED" || state == "DELIVERY_FAILED") {
    return "#e20613"; //red
  } else if (state == "DELIVERED") {
    return "#36B600"; //green
  }else {
    return "#f9ba02"; //yellow
  }
}

export default function ShipmentTracking() {
  const { t } = useTranslation();
  const { Shipment, loading, error } = useSelector((state) => state.data);
  const currentState = Shipment?.CurrentStatus?.state;
  if (loading) return <p className="font-bold">{t('Loading')}...</p>;
  if (error) return <p className="font-bold">{t('The tracking number you entered is incorrect')}</p>;
  return (
    <>
      <div className="mb-4 font-bold">{!Shipment || Object.keys(Shipment).length === 0 ? t("Enter track number to search for your shipment") : ""}</div>
      <div className="border border-1 border-gray-100 rounded-lg p-5 mb-8">
        <div className="flex flex-wrap gap-5 items-center justify-between">
          <div className="flex flex-col justify-start">
            <p className="text-sm text-neutral-500">
              {t("Shipment no.")} {Shipment.TrackingNumber}
            </p>
            <p className="font-bold" style={{color:stateColor(currentState)}} >{t(Shipment.CurrentStatus?.state)}</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-sm text-neutral-500">{t("Latest Update")}</p>
            <p className="font-bold">{parseLatestUpdate(Shipment.CurrentStatus?.timestamp)} </p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-sm text-neutral-500">{t("Provider Name")}</p>
            <p className="font-bold">{!Shipment || Object.keys(Shipment).length === 0 ? "" : "SOUQ.COM"}</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-sm text-neutral-500">
              {t("Promised Delivery Date")}
            </p>
            <p className="font-bold">{parsePromisedDate(Shipment.PromisedDate)}</p>
          </div>
        </div>
        <hr className="mx-[-1.2rem] my-5"></hr>
        <ShippingSteps state={Shipment.CurrentStatus?.state}></ShippingSteps>
      </div>
      <div className="grid md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <p className="font-semibold mb-4">{t("Shipping Details")}</p>
          <DetailsTable TransitEvents={Shipment.TransitEvents} reasonColor={stateColor(currentState)}></DetailsTable>
        </div>
        <div className="md:col-span-4">
          <p className="font-semibold mb-4">{t("Shipping Address")}</p>
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
              <p className="font-bold mb-2 ">
                {t("Do you have a problem with your shipment")}
              </p>
              <Button type="primary" className="rounded-xl w-full py-2 h-auto">
                {t("Report a Problem")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
