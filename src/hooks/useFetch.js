import React from "react";
import { useEffect, useState } from "react";

const localCache = () => {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log("using cache");
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: true,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    //manage local cache
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
