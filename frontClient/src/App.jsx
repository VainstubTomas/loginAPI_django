import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpreadSheetUsers from './components/SpreadSheetUsers';
import CreateUser from './components/CreateUser';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SpreadSheetUsers />} />
                <Route path="create/" element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    )
}