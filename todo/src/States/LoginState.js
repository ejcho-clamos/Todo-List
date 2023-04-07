import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

/** 1.아무것도 설정 안하고 쓰는 경우
 *    localStorage에 저장되며, key 이름은 'recoil-persist'로 저장됨
 */
const { persistAtom } = recoilPersist();

/** 2.sessionStorage에 저장하고 싶은 경우
 *    Next.js를 쓴다면 sessionStorage는 아래와 같이 따로 설정 필요
 */
// const sessionStorage =
//     typeof window !== 'undefined' ? window.sessionStorage : undefined

// const { persistAtom } = recoilPersist({
//     key: 'custom(내맘대로)',
//     storage: sessionStorage,
// })

/** Recoil-persist를 적용시키려면 아래의 effects_UNSTABLE을 적어주어야 한다. */
// const myAtom = atom < MyAtomType > ({
//     key: 'myAtomKey',
//     default: myDefaultState,
//     effects_UNSTABLE: [persistAtom],
// })

export const LoginState = atom({
  key: "LoginState",
  default: {
    userId: "",
    userName: "",
    /** true 면 Login상태 */
    isLogin: false,
  },
  storage: localStorage,
  effects_UNSTABLE: [persistAtom],
});
