import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { TextField } from "@mui/material";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());

  type TExcludeDate =
    | {
        date: Date;
        message?: string;
      }[]
    | Date[];

  const excludeDates: TExcludeDate = [
    addDays(new Date(), 1),
    addDays(new Date(), 5),
  ];

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date: Date | null) => {
        if (date) setStartDate(date);
      }}
      minDate={new Date()}
      excludeDates={excludeDates}
      customInput={<TextField className="input-area" size="small" />}
    />
  );
}
