import { useState, useEffect } from 'react';

export function useDebounce(textInput, timeout = 500) {
  const [debouncedSearch, setDebouncedSearch] = useState(textInput);

  useEffect(() => {
    const timeoutFunction = setTimeout(() => {
      setDebouncedSearch(textInput);
    }, timeout);

    return () => {
      clearTimeout(timeoutFunction);
    };
  }, [timeout, textInput]);

  return debouncedSearch;
}