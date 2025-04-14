"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Logo from '../images/logo.svg';
import Mbutton from './Buttons';
import  HamIcon from '../images/icon-hamburger.svg';
const pages = ['Pricing', 'Products', 'About Us', 'Careers', 'Community'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: "transparent !important",
      boxShadow: 'none',  // لإزالة الظل
      border: 'none'       // لإزالة أي حدود
    }}>
      <Container maxWidth="xl" sx={{ marginBottom: "70px", padding: "20px" }}>
        <Toolbar disableGutters>
          {/* for logo manage */}
          <Box sx={{ flexGrow: 1 }}>
            <Image src={Logo} alt="Logo" />
          </Box>
          {/* for hamburger icon  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, justifyContent: 'flex-end'  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Image src={HamIcon} alt="menu icon" width={24} height={18} />
            </IconButton>
            {/* for menu of navbar after click hamicon */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, color: 'hsl(228, 39%, 23%)', cursor: 'pointer' }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* navbar buttons for go to the pages hideen in small screen  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none ', lg: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  display: { xs: 'none', md: 'block' }, my: 2, color: 'hsl(228, 39%, 23%)', display: 'block', fontSize: '20px', textTransform: 'capitalize', paddingRight: '20px',
                  "&:hover": { color: "#a39999", backgroundColor: "transparent" } // تغيير اللون عند الضغط
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* button get started hidden in small screen */}
          <Box sx={{ flexGrow: 1 ,display:{xs:'none', lg: 'block'}}}>
            <Tooltip title="">
              <Mbutton text="Get Satrted" />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
