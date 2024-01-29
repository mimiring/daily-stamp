// type Props = {}
import { useEffect, useState } from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
        onChange={setValue}
        value={value}
        formatDay={(_, date) => date.toLocaleString("en", { day: "numeric" })}
        tileContent={mark}
      />
    </>
  );
};
