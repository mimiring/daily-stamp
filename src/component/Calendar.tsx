// type Props = {}
import { useState } from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Calendar = () => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <>
      <ReactCalendar
        onChange={setValue}
        value={value}
        formatDay={(_, date) => moment(date).format("D")}
      />
    </>
  );
};
