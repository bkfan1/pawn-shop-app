import { useState, useEffect } from "react";
import { regex } from "../utils/regex";

export const usePaymentData = (
  initialPaymentMethod,
  initialPaymentData
) => {
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
  const [paymentData, setPaymentData] = useState(initialPaymentData);

  const paymentDataOnChange = () => {
    const { target } = event;
    const { name, value } = target;

    setPaymentData({ ...paymentData, [name]: value });
  };

  const paymentMethodOnChange=()=>{
    const {target} = event;
    const {value} = target;

    setPaymentMethod(value);

    switch (value) {
      case "pagoMovil":
        setPaymentData({
          bankName:"",
          bankDni:"",
          bankTel:"",
          totalAmount:""
        });
        
        break;
      case "transferenciaBancaria":
        setPaymentData({
          bankName:"",
          bankDni:"",
          bankAccountNum:"",
          totalAmount:""
        });
        break;
      case "dineroFisico":
        setPaymentData({
          totalAmount:""
        });
        break;
    
      default:
        setPaymentData({})
        break;
    }

  }

  const paymentDataValidation = () => {
    switch (paymentMethod) {
      case "pagoMovil":
        const fields = [
          regex.dni.test(paymentData["bankDni"]),
          regex.tel.test(paymentData["bankDni"]),
        ];
        return fields.every((field) => field === true);

        break;

      default:
        break;
    }
  };

  return {
    paymentMethod,
    setPaymentMethod,
    paymentData,
    setPaymentData,
    paymentMethodOnChange,
    paymentDataOnChange,
    paymentDataValidation,
  };
};
