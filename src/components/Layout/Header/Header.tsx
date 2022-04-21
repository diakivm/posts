import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { routeNames } from '../../../router/routes';
import { Avatar } from '@mui/material';
import { useTypeSelector } from '../../../hooks/useTypeSelector';


export const Header = () => {

   const { isAuth, user } = useTypeSelector(store => store.auth)

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar variant="regular" >
               <Box sx={style.linksBox}>
                  <Link to={routeNames.MAIN}>
                     <Typography variant="h6" component="div" sx={style.linkButton}>Main</Typography>
                  </Link>
                  <Link to={routeNames.POSTS}>
                     <Typography variant="h6" component="div" sx={style.linkButton}>Posts</Typography>
                  </Link>
               </Box>
               {
                  isAuth && <Avatar sx={{ bgcolor: 'red' }}>{user.username[0].toUpperCase()}</Avatar>
               }
            </Toolbar>
         </AppBar>
      </Box >
   )
}

const style = {
   linkButton: {
      color: "text.primary",
      p: 1
   },
   linksBox: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row'
   }
};
