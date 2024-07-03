import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '/SpreadSheetUsers.jsx'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<SpreadSheetUsers />} />
            </Routes>
        </BrowserRouter>
    )
}