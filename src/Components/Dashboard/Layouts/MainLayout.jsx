import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import logo from '../Asset/Images/logo.png'
import { AppBar, Avatar, Button, Container, Divider, Toolbar, Tooltip } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarList from '../Components/SidebarList';
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




export default function MainLayout({ children }) {
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
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />



            <AppBar position="fixed" open={open} id='mobile-header'>
                <Toolbar>
                    {/* <IconButton onClick={() => setOpen(!open)}>
                        <MenuOpenIcon fontSize='small' className='col1' />
                    </IconButton> */}
                    <SidebarList/>
                    
                    <Box className='fx_sb w100'>
                        <Box className='fx_fs'>
                            {/* <img src={logo} className='smlogo' alt='Logo' /> */}
                            <Typography variant="h4" className='fw5 blk' sx={{ marginLeft: '4px' }}>
                                PeakPortFolios
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>


            <Drawer variant="permanent" open={open} className='drawer'>
                <Box className="fx_sb" m={'14px'} mt={'22px'}>
                    <Box className='fx_sb w100'>
                        <Box className='fx_fs'>
                            {/* <img src={logo} className='smlogo' alt='Logo' /> */}
                            <Typography variant="h4" className='fw5' sx={{ display: open ? '' : 'none', marginLeft: '4px' }}>
                              PeakPortFolios
                            </Typography>
                        </Box>
                    </Box>
                    <Tooltip title="Collapse" arrow placement="right">
                        <IconButton onClick={() => setOpen(!open)} size='small' sx={{ display: open ? '' : 'none' }}>
                            <MenuOpenIcon fontSize='small' className='col1' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Expand" arrow placement="right">
                        <IconButton onClick={() => setOpen(!open)} size='small' sx={{ display: open ? 'none' : '' }}>
                            <KeyboardDoubleArrowRightIcon fontSize='small' className='col1' />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Box className="user-profile">
                    <List>
                        <ListItem disablePadding disableRipple disableTouchRipple>
                            <ListItemButton disableRipple disableTouchRipple className='fx_sb'>
                                <Box className="fx_fs">
                                    <Tooltip title="Client Name" arrow placement="right">
                                        <ListItemIcon>
                                            <Avatar>P</Avatar>
                                        </ListItemIcon>
                                    </Tooltip>
                                    <ListItemText primary='Client Name' sx={{ display: open ? '' : 'none', marginLeft: '8px' }} />
                                </Box>
                                <Box sx={{ display: open ? '' : 'none' }}>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={openM ? 'long-menu' : undefined}
                                        aria-expanded={openM ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                        size='small'
                                    >
                                        <MoreVertIcon fontSize='small' className='col2' />
                                    </IconButton>


                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={openM}
                                        onClose={handleClose}
                                    >

                                        <Button variant='text' className="menu_btn" fullWidth startIcon={<AccountCircleIcon fontSize='small' />} onClick={handleClose}>Profile</Button>
                                        <Button variant='text' className="menu_btn" fullWidth startIcon={<SettingsIcon fontSize='small' />} onClick={handleClose}>Settings</Button>
                                        <Link to='/'>
                                            <Button variant='text' className="menu_btn" fullWidth startIcon={<LogoutIcon fontSize='small' />} onClick={handleClose}>Log Out</Button>
                                        </Link>


                                    </Menu>
                                </Box>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>

                <Divider />

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

                        <Link to='/'>
                            <ListItem disablePadding>
                                <ListItemButton selected={isActive('/', '/Dashboard')} button>
                                    <Tooltip title="Advisor Insight" arrow placement="right">
                                        <ListItemIcon>
                                            <ManageAccountsIcon fontSize='small' />
                                        </ListItemIcon>
                                    </Tooltip>
                                    <ListItemText primary='Advisor Insight' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>


                        <Link to='/'>
                            <ListItem disablePadding>
                                <ListItemButton selected={isActive('/')} button>
                                    <Tooltip title="Stocks" arrow placement="right">
                                        <ListItemIcon>
                                            <CategoryIcon fontSize='small' />
                                        </ListItemIcon>
                                    </Tooltip>
                                    <ListItemText primary='Stocks' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link to='/'>
                            <ListItem disablePadding>
                                <ListItemButton selected={isActive('/')} button>
                                    <Tooltip title="Stock Management" arrow placement="right">
                                        <ListItemIcon>
                                            <DonutSmallIcon fontSize='small' />
                                        </ListItemIcon>
                                    </Tooltip>
                                    <ListItemText primary='Stock Management' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link to='/'>
                            <ListItem disablePadding>
                                <ListItemButton selected={isActive('/')} button>
                                    <Tooltip title="Profile" arrow placement="right">
                                        <ListItemIcon>
                                            <GroupIcon fontSize='small' />
                                        </ListItemIcon>
                                    </Tooltip>
                                    <ListItemText primary='Profile' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link to='/'>
                            <ListItem disablePadding>
                                <ListItemButton selected={isActive('/')} button>
                                    <Tooltip title="Log Out" arrow placement="right">
                                        <ListItemIcon>
                                            <AccountTreeIcon fontSize='small' />
                                        </ListItemIcon>
                                    </Tooltip>
                                    <ListItemText primary='Log Out' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                    </List>

                </Box>
            </Drawer>

            <Box component="main" className='main'>
                <Container maxWidth>
                    {children}
                </Container>
            </Box>

        </Box>
    );
}