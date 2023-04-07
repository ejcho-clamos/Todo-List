import React, { useState } from "react";
import "../css/List.css";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  left: 50%;
  top: 33%;
  width: 50px;
  height: 24px;
  background-color: white;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }

  > .toggle--checked {
    background-color: rgb(0, 200, 102);
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

export const Toggle = ({ item }) => {
  const [isOn, setisOn] = useState(item);

  const toggleHandler = () => {
    setisOn(!isOn);
  };
  return (
    <ToggleContainer
      // 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행
      onClick={toggleHandler}
    >
      {/* 아래에 div 엘리먼트 2개가 있다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정 */}
      {/* Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가. 조건부 스타일링을 활용*/}
      <div className={`toggle-container ${isOn ? "toggle--checked" : null}`} />
      <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
    </ToggleContainer>
  );
};
