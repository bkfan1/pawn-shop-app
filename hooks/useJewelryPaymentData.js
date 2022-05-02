import { useState } from "react";
import { regex } from "../utils/regex";

export const useJewelryPaymentData = (
  initialPaymentMethod = "",
  initialPaymentData = {}
) => {
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
  const [paymentData, setPaymentData] = useState(initialPaymentData);

  const paymentMethodOnChange = () => {
    const { target } = event;
    const { value } = target;

    switch (value) {
      case "Pago móvil":
        setPaymentData({
          bankName: "",
          bankDni: "",
          bankTel: "",
          totalAmount: "",
        });

        break;
      case "Transferencia bancaria":
        setPaymentData({
          bankName: "",
          bankDni: "",
          bankAccountNum: "",
          totalAmount: "",
        });
        break;
      case "Dinero fisico":
        setPaymentData({
          totalAmount: "",
        });
        break;

      default:
        break;
    }

    setPaymentMethod(value);
  };

  const paymentDataOnChange = () => {
    const { target } = event;
    const { name, value } = target;

    setPaymentData({ ...paymentData, [name]: value });
  };

  const paymentDataValidation = () => {
    let fields = [];

    switch (paymentMethod) {
      case "Pago móvil":
        fields = [
          regex.name.test(paymentData["bankName"]),
          regex.dni.test(paymentData["bankDni"]),
          regex.tel.test(paymentData["bankTel"]),
          paymentData["totalAmount"] !== "",
        ];
        return fields.every((field) => field === true);
        break;

      case "Transferencia bancaria":
        fields = [
          regex.name.test(paymentData["bankName"]),
          regex.dni.test(paymentData["bankDni"]),
          regex.bankAccountNum.test(paymentData["bankAccountNum"]),
          paymentData["totalAmount"] !== "",
        ];
        return fields.every((field) => field === true);
        break;

      case "Dinero fisico":
        return paymentData["totalAmount"] !== "";
        break;

      default:
        return false;
        break;
    }
  };

  return {
    paymentMethod,
    paymentMethodOnChange,
    paymentData,
    paymentDataOnChange,
    paymentDataValidation,
  };
};
