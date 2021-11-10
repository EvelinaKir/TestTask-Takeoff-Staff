import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import style from "./enterPage.module.scss";
import { userAuth } from "../../services/functions/auth";
import { Loader } from "../../components/Loader/Loader";
import { mainSlice } from "../../services/reducers";
import { useNavigate } from "react-router";

export const EnterPage = () => {
  const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {loggged, answer, loading, error} = useAppSelector(state => state.mainSlice)

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorLog, setErrorLog] = useState<boolean>(false)

const submitUser = (e: React.SyntheticEvent) => {
    e.preventDefault()
     dispatch(userAuth())
}

useEffect(() => {
  if (answer){
   answer.login == login && answer.password == password ? dispatch(mainSlice.actions.loggIn()) : setErrorLog(true)
  }
},[answer])

useEffect(() => {
if (loggged){
  navigate('contacts')
}
}, [loggged])


  return (
    <div className={style.container}>
      <form onSubmit={submitUser}>
        <input placeholder={'Логин'} value={login} type="text" onChange={(e) => setLogin(e.target.value)} />
        <input placeholder={'Пароль'} value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Войти</button>
      </form>
      <h1>Введите данные для входа</h1>
      {loading === 'pending' && (<Loader/>)}
      {errorLog && (<h2>Ошибка в логине или пароле</h2>)}
    </div>
  );
};
