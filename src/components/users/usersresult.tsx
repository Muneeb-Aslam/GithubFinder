/* eslint-disable @typescript-eslint/no-explicit-any */
import { GithubContext } from "../../contexts/githubContext";
import { GithubContextType } from "../../types/githubcontexttype";
import Spinner from "../layouts/spinner";
import UserItem from "./useritem";
import React, { useContext } from "react";

const UsersResult: React.FC = () => {
  const {users,loading} = useContext(GithubContext) as GithubContextType
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {!!users &&
            users.map((user: any, index: number) => (
              <UserItem key={index} user={user} />
            ))}
        </div>
      )}
    </>
  );
};

export default UsersResult;
