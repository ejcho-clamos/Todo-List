import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Modal.css";
import TodoList from "./TodoList";
import { Toggle } from "./ToggleContainer";
import Todo from "../config/Api";
import { useRecoilState } from "recoil";
import { LoginState } from "../States/LoginState";

const TodoPopup = ({ setModalOpen }) => {
  const navigate = useNavigate();
  const [isAddList, setIsAddList] = useRecoilState(LoginState);
  const [userTodo, setUserTodo] = useState({
    content: "",
    status: false,
    userId: isAddList.userId,
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
      } else if (userTodo.status.value == null) {
        alert("상태를 선택해주세요.");
      } else {
        addModal();
      }
    }
  };

  const addModal = async () => {
    try {
      const data = await Todo.listAdd(userTodo);
      if (data?.message == "200" && data?.status == "OK") {
        setIsAddList({
          ...data.data,
        });
        console.log(isAddList);
        alert("등록되었습니다.");
        closeModal();
        navigate("/todo");
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
          onChange={(e) => {
            setUserTodo({
              ...userTodo,
              status: false,
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
