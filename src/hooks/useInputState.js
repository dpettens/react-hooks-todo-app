import { useState } from "react";

export default function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function resetValue() {
    setValue(initialValue);
  }

  return [value, handleChange, resetValue];
}
