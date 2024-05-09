/* eslint-disable @typescript-eslint/no-explicit-any */
import { GithubContextType } from "../types/githubcontexttype";

export enum GithubActionType {
  SET_USERS = "SET_USERS",
  CLEAR = "CLEAR"
}

export interface GithubReducerStateType {
  users:any,
  loading:boolean
}
export interface GithubAction {
  type: GithubActionType;
  payload?: GithubContextType;
}

const GithubReducer = (state: GithubReducerStateType, action: GithubAction) => {
  const { type, payload } = action;
  switch (type) {
    case GithubActionType.SET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
      case GithubActionType.CLEAR:
        return {
          ...state,
          users: [],
        };
    default:
      return state;
  }
};

export default GithubReducer;
