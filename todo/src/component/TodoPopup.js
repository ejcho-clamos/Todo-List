import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Modal.css";
import TodoList from "./TodoList";
import { Toggle } from "./ToggleContainer";
import Todo from "../config/Api";
import { useRecoilState } from "recoil";
import { LoginState } from "../States/LoginState";
import { useQueryClient } from "react-query";

const TodoPopup = ({ setModalOpen, refetch }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(LoginState);
  const [userTodo, setUserTodo] = useState({
    content: "",
    status: false,
    userId: userData.userId,
  });

  /** esc key로 modal 창 닫는 이벤트 추가 */
  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);
  const closeModal = () => {
    setModalOpen(false);
  };

  const addEnter = (e) => {
    if (e.key === "Enter") {
      if (userTodo.content.length <= 0) {
        alert("할 일을 적어주세요.");
      } else {
        addModal();
      }
    }
  };

  const addModal = async () => {
    try {
      const data = await Todo.listAdd(userTodo);
      if (data?.message == "200" && data?.status == "OK") {
        alert("등록되었습니다.");
        queryClient.invalidateQueries(["list"]);

        closeModal();
      } else {
        alert("공백 없이 입력 부탁드립니다.");
      }
    } catch {
      alert("공백 없이 입력 부탁드립니다.");
    }
  };
  return (
    <div className="popup-wrap modal-bg">
      <h2>ADD TODO ITEM</h2>
      <div className="modal-content-wrap">
        <h3>CONTENT</h3>
        <input
          type={"text"}
          onKeyDown={addEnter}
          onChange={(e) => {
            setUserTodo({
              ...userTodo,
              content: e.target.value,
            });
          }}
        />
      </div>
      <div className="modal-status-wrap">
        <h3>STATUS</h3>
        <Toggle
          item={userTodo.status}
          onChange={(e) => {
            setUserTodo({
              ...userTodo,
              status: e,
            });
          }}
        />
      </div>
      <div className="modal-btn-wrap">
        <button className="close-btn" onClick={closeModal}>
          CLOSE
        </button>
        <button className="additem-btn" onClick={addModal}>
          ADD ITEM
        </button>
      </div>
    </div>
  );
};

export default TodoPopup;
