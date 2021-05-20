import React from "react";
import { DatePickerComponent } from "components/shared/datePicker/datePicker.styled";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ date, onDateChange: handleDateChange, ...props }) => {
  return <DatePickerComponent {...props} selected={date} dateFormat="yyyy-MM-dd" onChange={handleDateChange} />;
};

export default DatePicker;
