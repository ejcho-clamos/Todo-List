import { useMutation, useQueryClient } from "react-query";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { LoginState } from "../States/LoginState";
import Todo from "../config/Api";

/** todolist 생성 */
export function useCreateTodo() {
  const [userData, setUserData] = useRecoilState(LoginState);
  const [userTodo, setUserTodo] = useState({
    content: "",
    status: false,
    userId: userData.userId,
  });
  const queryClient = useQueryClient();
  return useMutation((userTodo) => Todo.listAdd(userTodo), {
    onAdd: () => {
      queryClient.invalidateQueries();
    },
  });
}
