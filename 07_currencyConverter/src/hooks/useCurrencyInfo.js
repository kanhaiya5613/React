import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json()) 
      .then((res) => {
        setData(res.rates);      
        console.log("API Data:", res.rates);
      })
      .catch((err) => console.error(err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
