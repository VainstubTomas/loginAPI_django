import { useEffect, useState } from "react";
import axios from 'axios';

export default function App() {

    const [user, setUser] = useState();

    const searchData = () => {
        return axios.get('http://127.0.0.1:8000/')
            .then(response => setUser(response.data))
    }

    useEffect(() => {
        searchData();
    }, [])

    return (
        <main className="App">
            <h1>Users</h1>
            <ul>
                {user && user.length > 0 && user.map((userObj, index) => (
                    <li key={userObj.id}>{userObj.name}</li>
                ))}
            </ul>
        </main>
    )
}