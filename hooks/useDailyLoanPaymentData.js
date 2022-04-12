import { useState } from "react";

export const useDailyLoanPaymentData = (initialCapital, initialEmuloments, initialTotalAmount) => {
  const [capital, setCapital] = useState(initialCapital);
  const [emuloments, setEmuloments] = useState(initialEmuloments);
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount)

  const dailyLoanPaymentDataOnChange = () => {
    const { target } = event;
    const {name, value} = target;

    switch (name) {
      case "capital":
        setCapital(value);
        break;

      case "emuloments":
        setEmuloments(value);
        break;
      case "totalAmount":
        setTotalAmount(value);
        break;

      default:
        break;
    }
  };

  return {
    capital,
    setCapital,
    emuloments,
    setEmuloments,
    totalAmount,
    setTotalAmount,
    dailyLoanPaymentDataOnChange,
  };
};
