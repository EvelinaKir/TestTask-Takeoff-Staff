import { useEffect, useState } from "react";
import { contactsSlice } from "../../services/reducers";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import style from "./contacts.module.scss";
import { sendContact, getContacts } from "../../services/functions/contacts";
import { OneContact } from "./OneContact";
import { Loader } from "../../components/Loader/Loader";
export const Contacts = () => {
  const dispatch = useAppDispatch();
  const {answer,data, loading } = useAppSelector((state) => state.contactsSlice);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div className={style.container}>
      <h1>Контакты</h1>
      <div className={style.newContact}>
        <h4>Сохранить новый контакт</h4>
        <OneContact editable={false} />
      </div>
      <div className={style.searchField}>
        <h4>Поиск контактов</h4>
        <SearchField/>
      </div>
      <div className={style.allContacts}>
        <h4>Список контактов</h4>
        {!loading && data && (<AllContacts/>)}
        {loading && (<Loader/>)}
      </div>
    </div>
  );
};

const SearchField = () => {
  return(
    <OneContact editable={false} search={true} />
  )
}


const AllContacts = () => {
  const {data, loading, filtered } = useAppSelector((state) => state.contactsSlice);
  const result = data.map((elem: any) => { return(<OneContact editable={true} info={elem.contact} key={`${elem.id + elem.contact.name + 1}`} id={elem.id} />)})
 const lastResult = filtered ? filtered.map((elem: any) => { return(<OneContact editable={true} info={elem.contact} key={`${elem.id + elem.contact.name + 1}`} id={elem.id} />)}) : result


  return(
    <>
    {!loading && data && (<div>{lastResult}</div>)}
    {loading  && (<Loader/>)}
    </>
  )
}