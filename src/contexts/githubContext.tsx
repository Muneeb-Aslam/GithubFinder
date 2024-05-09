/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useReducer } from "react";
import { GithubContextType } from "../types/githubcontexttype";
import React, { useEffect } from "react";
import GithubReducer, { GithubActionType } from "./githubreducers";

export const GithubContext = createContext<GithubContextType | null>(null);

const GithubContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialState = {
    users: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_TOKEN}`,
        },
      });
      const data = await response.json();
      dispatch({ type: GithubActionType.SET_USERS, payload: data });
    };
    fetchUsers();
  }, []);

  const searchUsers = async (text: any) => {
    const params = new URLSearchParams({ q: text });
    console.log(params);

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_TOKEN}`,
        },
      }
    );
    const { items } = await response.json();
    dispatch({ type: GithubActionType.SET_USERS, payload: items });
  };

  const clearUsers = () => {
    return dispatch({
      type: GithubActionType.CLEAR,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContextProvider;
