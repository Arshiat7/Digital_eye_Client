import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const url = `http://localhost:5000/users`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            })
            setUsers(data)
        }
        getUsers()
    }, [])
    return [users , setUsers]
};

export default useUser;