import { useState, useEffect } from "react";
import { API_ENDPOINT } from "../context";

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])

  const fetchMovies = async (url) => {
    setIsLoading(true)
    try{
      const response = await fetch(url) //fetch - inbuilt library in js. no import required
      const data = await response.json()
      if(data.Response){                //response is true or false as to success of api call -- given by fetch
        setData(data.Search || data)    // if data.search property is not availavle, set complete data 
        setError({show:false, mas:""})
      }else{
        setError({show:true, mas:data.Error}) //data. error --> also provided by fetch
      }
      setIsLoading(false)
    }catch(error){
      console.log(error)
    }
  }

  return { isLoading, error, data };
};

export default useFetch;
