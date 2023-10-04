import React from 'react';
import ProfileCard from "../components/ProfileCard";
import TabDetails from "../components/TabDetails";
import axios from "axios";
import {useLoaderData} from "react-router-dom";

export interface User {
    id: string;
    name: string;
    summary: string;
    state: string;
    country: string;
    avatarUrl: string;
    yearsOfExperience:string;
    certificateCount:string;
    numberOfInternships:string;
}

export async function loader({params} : any) {
    const res = await axios.get <User>('https://6255745f52d8738c6922364f.mockapi.io/users/' + params.id)
    const user = res.data
    return {
        user
    }
}


function Profile() {

    const { user } = useLoaderData () as {user:User};
    return (
        <>
            <ProfileCard user={user}/>
            <TabDetails user={user}/>
        </>
    );
}

export default Profile;