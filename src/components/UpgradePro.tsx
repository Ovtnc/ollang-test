import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {Button, Container, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
export default function UpgradePro() {
    return (
        <>
            <Container>
                <Grid item>
                   <Img src="https://img.freepik.com/free-vector/trophy_78370-345.jpg?w=740&t=st=1696272286~exp=1696272886~hmac=a84b9910a0202b625748d8d84e2f72c0647c76e13ab12d18017415b06e3792ad" alt="logo" />

                </Grid>
                <Typography variant="h5" gutterBottom component="div" align={"center"}>
                 Upgrade To <b>Pro</b>
                </Typography>
                <Typography fontSize={13} color={"#989BA5"} align={"center"}  component="div" >
                   lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                <Grid item>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <ListItem >
                            <ListItemAvatar sx={{
                                minWidth: '40px',
                                display: 'flex',
                                alignItems: 'center',
                            }}>

                                    <CheckCircleIcon sx={{color:"green"}}/>

                            </ListItemAvatar>
                            <ListItemText  primaryTypographyProps={{ sx: { fontSize: '11px' } }}  primary="Unlimited Job Post"  />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar sx={{
                                minWidth: '40px',
                                display: 'flex',
                                alignItems: 'center',
                            }}>

                                    <CheckCircleIcon sx={{color:"green"}}/>

                            </ListItemAvatar>
                            <ListItemText  primaryTypographyProps={{ sx: { fontSize: '11px' } }} primary="Multiple job communication " />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar sx={{
                                minWidth: '40px',
                                display: 'flex',
                                alignItems: 'center',
                            }}>

                                    <CheckCircleIcon sx={{color:"green"}}/>

                            </ListItemAvatar>
                            <ListItemText  primaryTypographyProps={{ sx: { fontSize: '11px' } }} primary="Here 10+ freelancers for one project"  />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar sx={{
                                minWidth: '40px',
                                display: 'flex',
                                alignItems: 'center',
                            }}>

                                    <CheckCircleIcon sx={{color:"green"}}/>

                            </ListItemAvatar>
                            <ListItemText  primaryTypographyProps={{ sx: { fontSize: '11px' } }} primary="Filter, bloc, search talent freelancers"  />
                        </ListItem>
                    </List>
                </Grid>

<Grid item md={12} sx={{
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
}}>
    <Button sx={GradientButton} variant="outlined">
    Upgrade Plan
    </Button>
</Grid>


            </Container>
        </>
    );
}