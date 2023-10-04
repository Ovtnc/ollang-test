import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {alpha, Button, InputBase, Paper, SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material';
import {User} from "../routes/Profile";
import Experience from "./Experience";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabDetails({user}: {user : User}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };




    return (

        <Box sx={{ width: '100%' }}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example">

                    <Tab label="Experience" {...a11yProps(0)} />
                    <Tab disabled label="Biography" {...a11yProps(1)} />
                    <Tab disabled label="Skills  " {...a11yProps(2)} />
                    <Tab disabled label="Portfolio  " {...a11yProps(3)} />

                </Tabs>
            </Box>
    <Paper>
            <CustomTabPanel value={value} index={0}>


                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>

                    <Typography sx={{
                        fontWeight: "bold",
                        fontSize: 20,

                    }}>
                        Job Experience
                    </Typography>


                    <Button sx={{

                        borderRadius:200,
                        backgroundColor: "#1a73e8",
                        color: "#ffffff",


                    }} variant={"contained"}>
                        Add More
                    </Button>
                </Box>



        <Experience/>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
            Item Four
        </CustomTabPanel>

    </Paper>

        </Box>


    );
}