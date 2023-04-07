import React, { useState } from "react";
import { GoChecklist } from "react-icons/go";
import { useQuery, useQueryClient } from "react-query";
import Logo from "../component/Logo";
import TodoList from "../component/TodoList";
import TodoPopup from "../component/TodoPopup";
import "../css/List.css";
import Lists from "../config/Api";
import useInvaildDateQueries from "../hooks/useInvaildDateQueries";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginState } from "../States/LoginState";

const List = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const deleteQuery = useInvaildDateQueries();
  const queryClient = useQueryClient();
  const goToPopup = () => {
    setModalOpen(true);
    // deleteQuery.deleteQuery(["list"]);
  };
  const userDatas = useRecoilValue(LoginState);

  const { isLoading, data, isError } = useQuery(
    ["list", userDatas.userId],
    ({ queryKey }) => Lists.postList(queryKey[1]),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <div>Loading..//Spiner 삽입 예정</div>;
  }

  if (isError) {
    return <div>ToDo List를 불러오지 못했습니다.</div>;
  }

  return (
    <>
      {modalOpen && (
        <TodoPopup setModalOpen={setModalOpen} queryClient={queryClient} />
      )}
      <Logo />
      <div className="todo-wrap">
        <div className="todo-logo-wrap">
          <h1>TODO-LIST</h1>
          <div className="todo-logo-btn">
            <button onClick={goToPopup} className="todo-add-btn">
              ADD
            </button>
          </div>
        </div>
        <div className="todo-title-wrap">
          <GoChecklist className="title-icons" color="#fff" />
          <span>MY TO-DO LIST</span>
        </div>
        {data.data?.map((todo) => (
          <TodoList item={todo} />
        ))}
      </div>
    </>
  );
};

export default List;
