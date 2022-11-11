import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [arr, setArr] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState();

  useEffect(
    () => {
      console.log("useEffect ran damn");
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("data could not be fetched");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setError(null);
          setArr(data);
          setPending(false);
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
          console.log(err.message);
        });
      console.log(arr);
      // console.log(joke)
    },
    /*Run this hook once*/ [url]
    );
    return { arr, pending, error };
};

export default useFetch;
