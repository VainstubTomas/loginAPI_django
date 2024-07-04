import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpreadSheetUsers from './components/SpreadSheetUsers';
import FormCreateUser from './components/FormCreateUser';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SpreadSheetUsers />} />
                <Route path="/form_create_user" element={<FormCreateUser />} />
            </Routes>
        </BrowserRouter>
    )
}