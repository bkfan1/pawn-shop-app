import { useState } from "react";

export const useDailyLoanDate = (initialLoanDate = null)=>{
    const [loanDate, setLoanDate] = useState(initialLoanDate);

    return {loanDate, setLoanDate}
}