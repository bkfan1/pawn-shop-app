import { useState } from "react";
export const useStep = (initialStep = 1) => {
  const [step, setStep] = useState(initialStep);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return { step, setStep, nextStep, prevStep };
};
