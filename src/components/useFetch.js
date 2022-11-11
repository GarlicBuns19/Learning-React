import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [arr, setArr] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState();

  useEffect(
    () => {
      console.log("useEffect ran damn");

      const abortCont = new AbortController();

      fetch(url, { signal: abortCont.signal })
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
            if(err.name === 'AbortErro'){
                console.log(err)
            }else{
                setPending(false);
                setError(err.message);
                console.log(err.message);
            }
        });
      console.log(arr);
      // console.log(joke)
      return () => {
        abortCont.abort()
        console.log("cleanup");
      };
    },
    /*Run this hook once*/ [url]
  );
  return { arr, pending, error };
};

export default useFetch;
