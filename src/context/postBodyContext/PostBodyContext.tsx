import React, { createContext, useReducer } from "react";

type initialStateType = {
  loading: boolean;
  error: string;
  data: {};
};

type postBodyProviderType = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export const PostBodyContext = createContext(null);

const initialState: initialStateType = {
  loading: true,
  error: "",
  data: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "POST_BODY_SUCCESS":
      return { ...state, data: action.payload };
    case "POST_BODY_ON_LOAD":
      return { ...state, loading: action.payload };
    case "POST_BODY_ON_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const PostBodyProvider = ({ children }: postBodyProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostBodyContext.Provider value={{ state, dispatch }}>
      {children}
    </PostBodyContext.Provider>
  );
};
