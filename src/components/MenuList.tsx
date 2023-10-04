import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';


export const mainListItems = (
    <>

        <ListItemButton disabled={true}>

            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText  primary="My Job Feed" />
        </ListItemButton>
        <ListItemButton  disabled={true}>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Discover Jobs" />
        </ListItemButton>
        <ListItemButton disabled={true}>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Saved Jobs" />
        </ListItemButton>
        <ListItemButton disabled={true}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Proposal" />
        </ListItemButton>
        <ListItemButton disabled={true}>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="All Contracts" />
        </ListItemButton>
        <ListItemButton onClick={
            () => {
                window.location.href = "/"
            }
        }>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton disabled={true}>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Transaction" />
        </ListItemButton>
        <ListItemButton disabled={true}>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItemButton>
    </>
);

