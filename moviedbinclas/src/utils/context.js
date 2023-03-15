import React, { useContext, useState } from "react";
import useFetch from "./Hooks/useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [query, setQuery] = useState("Avengers")
  const { isLoading, error, data:movies } = useFetch(`&s=${query}`) // or const data = useFetch(`&s=${query}`) then access each by data.--- here data is destructured + renaming items in the data can be done by oldname:newname
  return (
  <AppContext.Provider value={{isLoading, error, movies, query, setQuery}}>
    {children}
  </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=f0abfb77`;
