import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import style from "./enterPage.module.scss";
import { userAuth } from "../../services/functions/auth";
export const EnterPage = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.mainSlice)


    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

const submitUser = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(userAuth(login, password))
}

  return (
    <div className={style.container}>
      <form onSubmit={(e) => submitUser(e)}>
        <input value={login} type="text" onChange={(e) => setLogin(e.target.value)} />
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Войти</button>
      </form>
      <h1>Введите данные для входа</h1>
    </div>
  );
};
