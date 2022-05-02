import { useState } from "react";

export const useDate = (initialDate) => {
  const [date, setDate] = useState(initialDate);

  const dateOnChange = () => {
    const { target } = event;
    const { value } = target;

    setDate(value);
  };

  return { date, dateOnChange };
};
