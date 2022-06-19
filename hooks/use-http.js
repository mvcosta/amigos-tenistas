import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

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
        throw new Error("Request failed");
      }
      const data = await response.json();
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setisLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
