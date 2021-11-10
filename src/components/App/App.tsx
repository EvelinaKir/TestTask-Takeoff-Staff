import { EnterPage } from "../../pages/Enter/EnterPage"
import { Contacts } from "../../pages/Contacts/Contacts"
import { Route, Routes, Outlet } from "react-router-dom";

export const App = () => {
    
    return <>
    <Routes>
    <Route path='/' element={<EnterPage/>}/>
    <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </>
}