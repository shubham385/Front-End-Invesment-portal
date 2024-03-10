import * as React from 'react';
// import logo from '../Asset/Images/logo.png'
import { Avatar, AppBar, Box, Toolbar, Typography, Button,  Menu, } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled,  } from '@mui/material/styles';


const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />))

export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" id='header'>
                <Toolbar>
                    <Box>
                        {/* <img src={logo} className='logo' alt='Logo' /> */}
                    </Box>
                    <Typography variant="h4" className='title fw5' sx={{ flexGrow: 1 }}>
                        PeakPortFolios
                    </Typography>
                    <Button disableRipple>
                        <Avatar className='avatar'>
                            <PersonOutlineIcon />
                        </Avatar>
                    </Button>
                    <Button
                        id="demo-customized-button" className='menu_btn' disableRipple
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Pratima
                    </Button>
                    {/* <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            Duplicate
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            Archive
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            More
                        </MenuItem>
                    </StyledMenu> */}
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="var(--black)"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}