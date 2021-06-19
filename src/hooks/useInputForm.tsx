import { useState } from "react";

type KeyValPair = {
  [key: string]: string
}

export const useInputForm = (initialState: any ) => {
  const [values, setValues] = useState(initialState);

  const reset = () => setValues(initialState);
  const handleInputChange = (target: HTMLInputElement) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  return [values, handleInputChange, reset];
}