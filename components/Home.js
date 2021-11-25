import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import  "./Home.css"
const Home = (props) => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    function logout(event) {
        localStorage.setItem('loggedIn', false);
        navigate('/login');
        event.preventDefault();
    }

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=500")
            .then(res => res.json())
            .then((data) => {
                setUsers(data.results)
            },
                (error) => {
                    console.log(error)
                })
    }, [])


    return (
        <div>
            <Button type="submit" onClick={logout} className="logout">
                Logout
            </Button>
            <div style={{marginTop:"70px", float:"left"}}>
                {users.map(user => <div style={{height: "60px"}}>{user.name.first + " " + user.name.last}<img style={{borderRadius: "25px", float:"right"}}alt="profile" src={user.picture.thumbnail} /></div>)}
            </div>
        </div>
    )

}

export default Home;