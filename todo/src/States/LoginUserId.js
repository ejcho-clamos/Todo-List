import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { LoginData } = recoilPersist();

export const LoginUserId = atom({
    key: 'LoginUserId',
    default: true,
    effects_UNSTABLE: [LoginData("userId")],
})