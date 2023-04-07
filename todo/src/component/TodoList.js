import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import "../css/List.css";
import { Toggle } from "./ToggleContainer";

const TodoList = ({ item }) => {
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
        <BiTrash className="del-icons" />
      </div>
    </div>
  );
};

export default TodoList;
