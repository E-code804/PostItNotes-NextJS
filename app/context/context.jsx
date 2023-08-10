"use client";
import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext(null);

export const topicsReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOPICS":
      return action.payload;
    case "ADD_TOPIC":
      return [...state, action.payload];
    case "REMOVE_TOPIC":
      return state.filter((topic) => topic._id !== action.payload._id);
    case "UPDATE_TOPIC":
      return state.map((topic) =>
        topic._id === action.payload._id ? action.payload : topic
      );
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [topics, dispatch] = useReducer(topicsReducer, []);
  return (
    <GlobalContext.Provider value={{ topics, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
