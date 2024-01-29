// type Props = {}
import { useEffect, useState } from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Dot, MarkingDay } from "./Calendar.styled";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Calendar = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [mark, setMark] = useState<string[]>([]);

  useEffect(() => {
    const newMarks = ["2024-01-23", "2024-01-02"];
    setMark(newMarks);
  }, []);

  return (
    <>
      <ReactCalendar
        calendarType="US"
        onChange={setValue}
        value={value}
        formatDay={(_, date) => moment(date).format("D")}
        tileContent={({ date }) => {
          const markingDays = [];
          if (mark.find((value) => value === moment(date).format("YYYY-MM-DD"))) {
            markingDays.push(<Dot />);
          }

          return <MarkingDay>{markingDays}</MarkingDay>;
        }}
      />
    </>
  );
};
