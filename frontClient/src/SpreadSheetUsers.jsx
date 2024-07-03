import { useEffect, useState } from "react";
import axios from 'axios';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import useNavigate from 'react-router-dom'

import "./SpreadSheetUsers.css"

export default function SpreadSheetUsers() {
    const navigate = useNavigate()

    const touch = () => {
        navigate('')
    }

    const [user, setUser] = useState();

    const searchData = () => {
        return axios.get('http://127.0.0.1:8000/')
            .then(response => setUser(response.data))
    }

    useEffect(() => {
        searchData();
    }, [])

    return (
        <main className="SpreadSheetUsers">
            <Typography variant="h2" className="principalTitle">USERS</Typography>
            <section className="infoGrids">
                <ul className="userTable">
                    <li>id</li>
                    {user && user.length > 0 && user.map((userObj, index) => (
                        <li key={userObj.id}>{userObj.id}</li>
                    ))}
                </ul>
                <ul className="userTable">
                <li>Name</li>
                    {user && user.length > 0 && user.map((userObj, index) => (
                        <li key={userObj.id}>{userObj.name}</li>
                    ))}
                </ul>
                <ul className="userTable">
                <li>Lastname</li>
                    {user && user.length > 0 && user.map((userObj, index) => (
                        <li key={userObj.id}>{userObj.lastname}</li>
                    ))}
                </ul>
            </section>
            <Button variant="contained" onClick={touch}>Create new user</Button>
        </main>
    )
}