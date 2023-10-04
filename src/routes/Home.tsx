import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import {User} from "../routes/Profile";
import {useLoaderData} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export async function loader({params} : any) {
    const res =  await axios.get<User[]>('https://6255745f52d8738c6922364f.mockapi.io/users')
    const users = res.data
    return {
        users
    }
}


function Home () {
    const { users } = useLoaderData () as {users:User[]};

    return (
        <>
            <List>
                {users.map(user => (
                    <ListItem key={user.id}>
                        <ListItemAvatar>
<AccountCircleIcon/>
                        </ListItemAvatar>
                        <ListItemText primary={user.name} />
                        <Button  href={`/profile/${user.id}`} variant="contained" color="primary">
                            Details
                        </Button>
                    </ListItem>
                ))}

            </List>
        </>
    );
};

export default Home;