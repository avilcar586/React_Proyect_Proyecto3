import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import TextField from '@mui/material/TextField';

import GoogleButton from 'react-google-button'

import GetProducts from '../content/GetProducts';
import GetProductCategories from '../content/GetProductCategories';

import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter, NavLink } from "react-router-dom";

import './styles.css';

import LogoutButton from '../login/Logout';
import Login from '../login/Login';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PersistentDrawerRight(user) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const [Openmod, setOpenMod] = React.useState(false);
  const openmodal = () => setOpenMod(true);
  const closemodal = () => setOpenMod(false);

  const [selectedCategory, setSelectedCategory] =React.useState('');

  const handleCategorySelection = (category) => {
      setSelectedCategory(category);
  }

  //const [selectedName, setSelectedName] =React.useState('');

  //Guarda el valor del input en el estado
  //const [selectedName, setSelectedName] = React.useState('');

  //const handleSearch = (selectedName) => {
  //  setSelectedName(selectedName);
  //}



  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    return event.target.value;
  };



  //User state
  //const [user, setUser] = React.useState();

  //const { user } = props;

  //Pasar el objero user a string

  const userString = JSON.stringify(user);

  //Seleccionar el valor2 del objeto user

  const userValue = JSON.parse(userString);

  //console.log(userValue.user.value2);




  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="Appbar">
        <Toolbar>
          
          <Typography variant="h6" noWrap sx={{ 
            display: 'flex',
            justifyContent: 'left',
            flexGrow: 1 }} component="div"   className='GlowingText' >
            <b>
              P<span>
              ro</span>
              yec<span>to</span>3</b>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >

            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <BrowserRouter>

        <Main open={open}  className="Main">
            
            
            <Routes className="Routes">
                  <Route path="/" element={<GetProducts></GetProducts>} />
                  <Route path="/category/:category" element={<GetProductCategories selectedCategory={selectedCategory}></GetProductCategories>} />
            </Routes>

        </Main>
      <Drawer className='Drawer'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        
        variant="persistent"
        anchor="right"
      
        open={open}
      >
        <DrawerHeader className='DrawerHeader'>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>

        </DrawerHeader>
        <Divider />

        <List className='Userdata'>

        <img src={user.user.photoURL} alt="user" /> 
        <p>Bienvenido {user.user.displayName}</p>
        <p>{user.user.email}</p>
        {/*console.log(user.user.photoURL)*/}
        </List>

        <List className='categorySelector'>

      
        <NavLink to="/" className="categoryLink">All</NavLink>
        <NavLink to="/category/electronics" onClick={() => handleCategorySelection('electronics')} className="categoryLink">Electronica</NavLink>
        <NavLink to="/category/jewelery" onClick={() => handleCategorySelection('jewelery')} className="categoryLink">Joyeria</NavLink>
        <NavLink to="/category/men's clothing" onClick={() => handleCategorySelection("men's clothing")} className="categoryLink">Ropa de Hombre</NavLink>
        <NavLink to="/category/women's clothing" onClick={() => handleCategorySelection("women's clothing")} className="categoryLink">Ropa de Mujer</NavLink>
        

        </List>

        <Divider />

        <List className='LogoutList'>

         <LogoutButton ></LogoutButton>

        </List>

      </Drawer>
      </BrowserRouter>

    </Box>
  );
}

