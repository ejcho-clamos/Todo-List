import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import "../css/List.css";
import { Toggle } from "./ToggleContainer";
import Todo from "../config/Api";
import { useRecoilState } from "recoil";
import { LoginState } from "../States/LoginState";

const TodoList = ({ item, refetch }) => {
  const queryClient = useQueryClient();
  const [userData, setUserData] = useRecoilState(LoginState);
  const [userTodo, setUserTodo] = useState({
    content: userData.content,
    status: userData.status,
    userId: userData.userId,
    id: userData.id,
  });
  const toDelTodo = () => {
    deleteTodo();
  };
  const deleteTodo = async () => {
    try {
      const data = await Todo.listDelete(userTodo);
      if (data?.message == "200") {
        alert("삭제 되었습니다.");
        queryClient.invalidateQueries(["list"]);
      } else {
        alert("실패하였습니다.");
      }
    } catch {
      alert("실패하였습니다.");
    }
  };
  return (
    <div className="todo-list-line">
      <div className="todo-check-wrap">
        {item?.status === true ? (
          <AiOutlineCheck color={"green"} className="check-icons" />
        ) : (
          <AiOutlineClose color={"red"} className="false-icons" />
        )}
      </div>
      <div className="todo-list-title">{item?.content}</div>
      <div className="toggle-wrap">
        <Toggle item={item.status} />
      </div>
      <div className="todo-list-del">
        <BiTrash className="del-icons" onClick={toDelTodo} />
      </div>
    </div>
  );
};

export default TodoList;
