import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { BasicButton } from '../../Components/BasicComponents/Button/BasicButton';

import './Header.min.css'
import { BasicAlert } from '../../Components/BasicComponents/BasicAlert/BasicAlert';

export const Header = (props) => {
  return (
    
    <Box className="header">
      <AppBar className='header-container' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar className="header">
          {props.isError ? <BasicAlert iconVisible={false} alertText={"Cannot save flow"} variant="filled" severity="error" /> : <BasicAlert iconVisible={false} alertText={"Flow saved successfully"} variant="filled" severity="success" />}
          <BasicButton className="save-button" color='inherit' variant="outlined" buttonText='Save Changes' />
        </Toolbar>
      </AppBar>
    </Box>
    
  )
};