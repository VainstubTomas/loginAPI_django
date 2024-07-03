import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpreadSheetUsers from './SpreadSheetUsers';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SpreadSheetUsers />} />
            </Routes>
        </BrowserRouter>
    )
}