import { Casino, History, Menu } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, Drawer, List, Toolbar } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppRootStateType } from "../state/store";
import { ResultStateType } from "../state/resultReducer";

export const AppBarHeader = () => {
    const [open, setOpen] = React.useState(false);
    const rolledDices = useSelector<AppRootStateType, ResultStateType>(state => state.rolledDices)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <Link to={"/"}>
                    <Button variant={"contained"} color={"info"} fullWidth={true}>{<Casino />}ROLL DICES</Button>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to={"/history"}>
                    <Button variant={"contained"} color={"info"} fullWidth={true}>{<History />}HISTORY</Button>
                </Link>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position={"static"}>
                <Toolbar>
                    <Button variant={"contained"} color={"info"} onClick={toggleDrawer(true)}>{<Menu />} OPEN MENU</Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </>
    )
}