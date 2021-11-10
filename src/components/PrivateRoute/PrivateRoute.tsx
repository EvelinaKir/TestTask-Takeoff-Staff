import { useAppSelector } from "../../services/store/hooks"
import { Navigate, Route, RouteProps, Outlet, OutletProps } from 'react-router-dom'
import React, { FunctionComponent } from "react"
import { Contacts } from "../../pages/Contacts/Contacts"

export const PrivateRoute:FunctionComponent<RouteProps> = ({element, path}) => {
    const logged = useAppSelector(state => state.mainSlice.loggged)

  return logged ? <Contacts/> : <Navigate to="/" />
}