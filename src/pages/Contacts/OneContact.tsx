import { useEffect, useState } from "react";
import { contactsSlice } from "../../services/reducers";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import style from "./contacts.module.scss";
import { sendContact, getContacts, sendContactsChange, deleteContact } from "../../services/functions/contacts";
import React from "react";
import { Loader } from "../../components/Loader/Loader";
import cancel from '../../images/cancel.png'

export const OneContact:React.FC<{editable: boolean, info?: any, id?: number, search?: boolean}> = ({editable,info, id, search}) => {
  const { answer,data, loading } = useAppSelector((state) => state.contactsSlice);
    const [name, setName] = useState<string>(editable  ? info.name  : "");
  const [email, setEmail] = useState<string>(editable  ? info.email : "");
  const [phone, setPhone] = useState<string>(editable  ? info.phone : "");
  const dispatch = useAppDispatch();

  const send = (e: React.SyntheticEvent) => {
    e.preventDefault();
     if (editable) {
      dispatch(contactsSlice.actions.filterSeach(null))
        dispatch(sendContactsChange(editInfo))
     }
     else {
      dispatch(contactsSlice.actions.filterSeach(null))
    dispatch(sendContact(contact));
     }
  };

  useEffect(() => {
    if (search && data) {
      const filtered:any = []
      data.map((elem:any) => {
        if(elem.contact.name.includes(name) && elem.contact.phone.includes(phone) && elem.contact.email.includes(email)){
          filtered.push(elem)
        }
        else {
          return null
        }
      })
      
     dispatch(contactsSlice.actions.filterSeach(filtered))
    }
  },[name, email, phone])

  useEffect(() => {
if (answer && answer.id){
  dispatch(contactsSlice.actions.filterSeach(null))
  dispatch(getContacts());
}
  },[answer, data])
  
  const showButton = () => {
    if(search){
      return false
    }
    if (!editable){
      return true
    }
    if(editable && info){
      return ( info.name !== name || info.phone !== phone || info.email !== email)
    }
  }


  const contact = {
    name: name,
    phone: phone,
    email: email,
  };
  const editInfo = {
    contact: contact,
    id: id
}

const deleteContactInfo = () => {
  dispatch(deleteContact(id))
  dispatch(contactsSlice.actions.filterSeach(null))
  dispatch(getContacts())

  
}
    return (
        <div key={id}>
        {loading && (<Loader/>)}
        {!loading && (
 <div className={style.oneContact} key={id}>
        <form onSubmit={send}>
          <input 
            placeholder={"ФИО"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
          <input
          placeholder={"Телефон"}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="text"
          />
          <input
          placeholder={"email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
          { showButton() && (<button>Сохранить</button>)}
          {editable && (<img onClick={() => {deleteContactInfo()}} src={cancel} alt={'cancel image'}/>)}
          {}
        </form>
      </div>
        )}
     
      </div>
    )
  }