import React from "react";
import {AppBar, Box, Button, Divider, Drawer, Grid, Icon, List, Stack, Toolbar, Typography} from "@mui/material";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {HistoryPage} from "./Pages/HistoryPage";
import {Casino, History, Menu} from "@mui/icons-material";

export const AppBarHeader = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <Link to={"/*"}>
                    <Button variant={"contained"} color={"info"} fullWidth={true}>{<Casino/>}ROLL DICES</Button>
                </Link>
            </List>
            <Divider/>
            <List>
                <Link to={"/history"}>
                    <Button variant={"contained"} color={"info"} fullWidth={true}>{<History/>}HISTORY</Button>
                </Link>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position={"static"}>
                <Toolbar>
                    {/*<Grid container spacing={1}>*/}
                    {/*    <Grid item xs={6}>*/}
                    {/*        <Link to={"/*"}>*/}
                    {/*            <Button variant={"contained"} color={"info"} fullWidth={true}>ROLL DICES</Button>*/}
                    {/*        </Link>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item xs={6}>*/}
                    {/*        <Link to={"/history"}>*/}
                    {/*            <Button variant={"contained"} color={"info"} fullWidth={true}>HISTORY</Button>*/}
                    {/*        </Link>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    <Button variant={"contained"} color={"info"} onClick={toggleDrawer(true)}>{<Menu/>} OPEN MENU</Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </>
    )
}