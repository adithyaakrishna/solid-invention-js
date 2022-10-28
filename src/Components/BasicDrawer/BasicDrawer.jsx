import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import { NodeButton } from '../NodeButton/NodeButton';
import MessageRounded from '@mui/icons-material/MessageRounded';

import './BasicDrawer.min.css'

const drawerWidth = 240;


export const BasicDrawer = (props) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {props.header}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        anchor="right"
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <div className="message-node" onDragStart={(event) => onDragStart(event, 'messageNode')} draggable>
              <NodeButton variant="outlined" buttonText='Message' startIcon={<MessageRounded />} />
            </div>
          </List>
        </Box>
      </Drawer>
      
    </Box>
  );
}
