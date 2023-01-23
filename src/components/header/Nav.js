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
import GetProductByName from '../content/GetProductByName';

import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter, NavLink } from "react-router-dom";

import styles from './styles.css';

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

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Crea una funcion que al dar click guarde el valor del input

  

  const [Openmod, setOpenMod] = React.useState(false);
  const openmodal = () => setOpenMod(true);
  const closemodal = () => setOpenMod(false);

  const [selectedCategory, setSelectedCategory] =React.useState('');

  const handleCategorySelection = (category) => {
      setSelectedCategory(category);
  }

  const [selectedName, setSelectedName] =React.useState('');

  const handleNameSelection = (name) => {
      setSelectedName(name);
  }

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>

          <Button 
          onClick={openmodal}
          
          variant="outlined"
          color='secondary'

          >Iniciar Sesion</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={Openmod}
            onClose={closemodal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
        }}
      >
        <Fade in={Openmod}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Iniciar Sesion
            </Typography>
            
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            <GoogleButton
            onClick={() => { console.log('Google button clicked') }}
          />


          </Box>
        </Fade>
      </Modal>

          <Typography variant="h6" noWrap sx={{ 
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '-8%',
            color: 'red',
            flexGrow: 1 }} component="div">
          Proyecto3
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

        <Main open={open}>

            <form className="searchBar">
                <input type="text" placeholder="Search" className="searchInput" />
                <button type="submit" className="searchButton" onClick={() => handleNameSelection('name')}>
                  Buscar
                </button>
            </form>



            <Routes>
                  <Route path="/" element={<GetProducts></GetProducts>} />
                  <Route path="/category/:category" element={<GetProductCategories selectedCategory={selectedCategory}></GetProductCategories>} />
                  <Route path="/product/:name" element={<GetProductByName  selectedName={selectedName} ></GetProductByName>} />  
            </Routes>

        </Main>
      <Drawer
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
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='categorySelector'>

      
        <NavLink to="/" className="categoryLink">All</NavLink>
        <NavLink to="/category/electronics" onClick={() => handleCategorySelection('electronics')} className="categoryLink">Electronica</NavLink>
        <NavLink to="/category/jewelery" onClick={() => handleCategorySelection('jewelery')} className="categoryLink">Joyeria</NavLink>
        <NavLink to="/category/men's clothing" onClick={() => handleCategorySelection("men's clothing")} className="categoryLink">Ropa de Hombre</NavLink>
        <NavLink to="/category/women's clothing" onClick={() => handleCategorySelection("women's clothing")} className="categoryLink">Ropa de Mujer</NavLink>
            
        </List>

        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      </BrowserRouter>

    </Box>
  );
}

