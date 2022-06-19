import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorStatusCode, setErrorStatusCode] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setisLoading(true);
    setError(null);
    try {
      const fetchConfig = {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      };
      const response = await fetch(requestConfig.url, fetchConfig);

      if (!response.ok) {
        const data = await response.json();
        const error = new Error(data.message);
        error.statusCode = response.status || 500;
        throw error;
      }
    } catch (error) {
      setError(error.message || "Something went wrong!");
      setErrorStatusCode(error.statusCode);
    }
    setisLoading(false);
  }, []);

  return {
    isLoading,
    error,
    errorStatusCode,
    sendRequest,
  };
};

export default useHttp;
