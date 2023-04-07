import logo from "./logo.svg";
import "./App.css";
import Wrap from "./Wrap";
import { useRecoilValue } from "recoil";
import { LoginState } from "./States/LoginState";
import { useEffect } from "react";

function App() {
  const loginValue = useRecoilValue(LoginState);
  useEffect(() => {
    if (loginValue.isLogin) {
    }
  }, []);
  return (
    <div>
      <Wrap />
    </div>
  );
}

export default App;
