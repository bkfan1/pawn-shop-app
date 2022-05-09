import { useState } from "react"


export const useSubmitFormError=(initialError)=>{
    const [submitError, setSubmitError] = useState(initialError);

    return {submitError, setSubmitError}
}