import { useState, useEffect } from "react";
import { regex } from "../utils/regex";
import {
  pagoMovilStructure,
  bankTransferStructure,
  cashStructure,
} from "../utils/paymentDataStructures";

export const usePaymentData = (initialPaymentMethod, initialPaymentData) => {
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
  const [paymentData, setPaymentData] = useState(initialPaymentData);
  const [paymentError, setPaymentError] = useState("");

  const paymentDataOnChange = () => {
    const { target } = event;
    const { name, value } = target;

    setPaymentData({ ...paymentData, [name]: value });
  };

  const paymentMethodOnChange = () => {
    const { target } = event;
    const { value } = target;

    setPaymentMethod(value);

    switch (value) {
      case "pagoMovil":
        setPaymentData(pagoMovilStructure);
        break;

      case "transferenciaBancaria":
        setPaymentData(bankTransferStructure);
        break;

      case "dineroFisico":
        setPaymentData(cashStructure);
        break;

      default:
        setPaymentData({});
        break;
    }
  };

  const handleSetError = (fieldsArray) => {
    if (fieldsArray.every((field) => field === true)) {
      setPaymentError("");
      return true;
    } else {
      setPaymentError(
        "Hay uno o más campos en el formulario de pago sin rellenar y/o con datos inválidos."
      );
      return false;
    }
  };

  const paymentDataValidation = () => {
    let fields;
    
    switch (paymentMethod) {
      case "pagoMovil":
        fields = [
          regex.name.test(paymentData["bankName"]),
          regex.dni.test(paymentData["bankDni"]),
          regex.tel.test(paymentData["bankTel"]),
          paymentData["totalAmount"] !== "",
        ];
        //console.log(fields);

        return handleSetError(fields);
        break;

      case "transferenciaBancaria":
        fields = [
          regex.name.test(paymentData["bankName"]),
          regex.dni.test(paymentData["bankDni"]),
          regex.bankAccountNum.test(paymentData["bankAccountNum"]),
          paymentData["totalAmount"] !== "",
        ];
        //console.log(fields);

        return handleSetError(fields);
        break;

      case "dineroFisico":
        if (paymentData["totalAmount"] !== "") {
          setPaymentError("");
          return true;
        }
        else{
          setPaymentError('El campo de monto total está vacío.')
          return false;
        }
        break;

      default:
        setPaymentError("Debes seleccionar un método de pago para continuar.");
        return false;
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
    paymentError,
  };
};
