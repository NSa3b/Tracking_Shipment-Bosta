import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";

export default function DetailsTable({TransitEvents, reasonColor}) {
  const { t } = useTranslation();
  console.log(TransitEvents);

  const parseDateTime = (timestamp) => {
    if (!timestamp) return { date: "", time: "" };
    const date = new Date(timestamp);
    return {
      date: format(date, "yyyy/MM/dd"),
      time: format(date, "HH:mm a"),
    };
  };


  return (
    <>
      <table className="w-full table-auto rounded-lg border-1 border border-gray-100 overflow-hidden">
        <thead className="border-1 border border-gray-100">
          <tr className="bg-[#fbfbfb] ">
            <th className="p-4 text-start">{t('Branch')}</th>
            <th className="p-4 text-start">{t('Date')}</th>
            <th className="p-4text-start">{t('Time')}</th>
            <th className="p-4 text-start">{t('Details')}</th>
          </tr>
        </thead>
        <tbody className="">
          {TransitEvents?.map((event, index) => {
            const { date, time } = parseDateTime(event.timestamp);
            return (
              <tr key={index} className=" border-b border-gray-100">
                <td className="p-4 border-s">{t('Nasr City')}</td>
                <td className="p-4">{date}</td>
                <td className="p-4">{time}</td>
                <td className="p-4 flex flex-col gap-2 border-e">
                  <p>{t(event.state)}</p>
                  <p style={{color:reasonColor}}>{event.reason && t(event.reason)}</p> 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

DetailsTable.propTypes = {
  TransitEvents: PropTypes.array,
  reasonColor: PropTypes.string,
};
