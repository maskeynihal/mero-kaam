import { useState } from 'react';

const useAlert = (initialState = {}) => {
  const [errors, setErrors] = useState(initialState);

  const handleError = (key, value) => {
    setErrors({ ...errors, [key]: value, allErrors: [...errors.allErrors, value] });
  };

  return {
    errors,
    handleError
  };
};

export default useAlert;
