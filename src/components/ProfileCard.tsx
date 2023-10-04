import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {
    alpha,
    Avatar,
    Box,
    Button,
    Card,
    CardHeader,
    Container,
    InputBase,
    List,
    ListItem,
    ListItemAvatar
} from "@mui/material";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import {useEffect, useState} from "react";
import ListItemText from "@mui/material/ListItemText";

import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { User } from '../routes/Profile';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const GradientButton = {
    color: '#fff',
    backgroundColor: '#1976d2',
    backgroundImage: 'linear-gradient(315deg, #1976d2 0%, #2196f3 74%)',
    borderRadius: 20,
    p:1,
    m:1
};

interface UserDetails {
    id: number;
    name: string;
    // Diğer kullanıcı bilgileri buraya eklenebilir
}interface DetailsInformationProps {
    userId: number | null;
}



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: "#ffffff",
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
export default function ProfileCard({user}: {user : User})  {

    return (
        <>
            <Search sx={{
                mb:3
            }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >


            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png?ga=GA1.1.1231133104.1662810684" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} md container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {user.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <LocationOnIcon/> {user.country + " - "+ user.state}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user.summary}
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            <Button variant={"outlined"} sx={GradientButton}>
                                Edit Profile
                            </Button>
                            <Button variant={"outlined"} sx={{
                                borderColor:'#1B7BD7',
                                borderRadius:20
                            }}>
                                View
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>


                <Grid container columns={{ xs: 4, sm: 8, md: 12 }} >

                        <Grid item xs={12} sm={4} md={4}     sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <CardHeader
                                avatar={
                                    <AccessTimeIcon />
                                }

                                title={`${user.yearsOfExperience} Years Job`}
                                subheader="Experience"
                            />
                        </Grid>

                    <Grid item xs={12} sm={4} md={4} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <CardHeader
                            avatar={
                                <EmojiEventsIcon  />
                            }

                            title={`${user.certificateCount} Certificates`}
                            subheader="Achieved"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}  sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <CardHeader
                            avatar={
                                <AssignmentIcon  />
                            }

                            title={`${user.numberOfInternships} Internships`}
                            subheader="Completed"
                        />
                    </Grid>
                </Grid>


        </Paper>
        </>
    );
}