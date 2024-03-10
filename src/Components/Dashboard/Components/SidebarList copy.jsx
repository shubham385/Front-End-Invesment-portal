import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {  Tooltip } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import GroupIcon from '@mui/icons-material/Group';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const drawerWidth = 250;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(10)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(10)} + 1px)`,
    },
});



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



export default function SidebarList() {

    const [open, setOpen] = React.useState(true);

    const location = useLocation();
    const isActive = (...paths) => {
        return paths.some(path => location.pathname.startsWith(path));
    };



    const [anchorEl, setAnchorEl] = React.useState(null);
    const openM = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box>
                <List>
                    <Link to='/dashboard'>
                        <ListItem disablePadding>
                            <ListItemButton selected={isActive('/dashboard')} button>
                                <Tooltip title="Dashboard" arrow placement="right">
                                    <ListItemIcon>
                                        <SpaceDashboardOutlinedIcon fontSize='small' />
                                    </ListItemIcon>
                                </Tooltip>
                                <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to='/Dashboard'>
                        <ListItem disablePadding>
                            <ListItemButton selected={isActive('/inventory-management', '/inventory-management-allocate-asset')} button>
                                <Tooltip title="Advisor Insight" arrow placement="right">
                                    <ListItemIcon>
                                        <ManageAccountsIcon fontSize='small' />
                                    </ListItemIcon>
                                </Tooltip>
                                <ListItemText primary='Advisor Insight' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>


                    <Link to='/Dashboard'>
                        <ListItem disablePadding>
                            <ListItemButton selected={isActive('/items')} button>
                                <Tooltip title="Stocks" arrow placement="right">
                                    <ListItemIcon>
                                        <CategoryIcon fontSize='small' />
                                    </ListItemIcon>
                                </Tooltip>
                                <ListItemText primary='Stocks' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to='/Dashboard'>
                        <ListItem disablePadding>
                            <ListItemButton selected={isActive('/stock-management')} button>
                                <Tooltip title="Stock Management" arrow placement="right">
                                    <ListItemIcon>
                                        <DonutSmallIcon fontSize='small' />
                                    </ListItemIcon>
                                </Tooltip>
                                <ListItemText primary='Stock Management' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to='/Dashboard'>
                        <ListItem disablePadding>
                            <ListItemButton selected={isActive('/users')} button>
                                <Tooltip title="Profile" arrow placement="right">
                                    <ListItemIcon>
                                        <GroupIcon fontSize='small' />
                                    </ListItemIcon>
                                </Tooltip>
                                <ListItemText primary='Profile' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to='/Login'>
                        <ListItem disablePadding>
                            <ListItemButton selected={isActive('/Login')} button>
                                <Tooltip title="Log out" arrow placement="right">
                                    <ListItemIcon>
                                        <AccountTreeIcon fontSize='small' />
                                    </ListItemIcon>
                                </Tooltip>
                                <ListItemText primary='Log out' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                </List>

            </Box>
        </>
    )
}
