import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpreadSheetUsers from './components/SpreadSheetUsers';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SpreadSheetUsers />} />
            </Routes>
        </BrowserRouter>
    )
}