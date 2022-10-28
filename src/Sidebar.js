/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import NodeButton from './Components/NodeButton/NodeButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';


import MessageRounded from '@mui/icons-material/MessageRounded';

export default (props) => {
    const drawerWidth = 240;
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
                    <div onDragStart={(event) => onDragStart(event, 'messageNode')} draggable>
                        <NodeButton variant="outlined" buttonText='Message' startIcon={<MessageRounded />} />
                    </div>
                </List>
                </Box>
            </Drawer>
        </Box>
        // <aside>
        //     <div onDragStart={(event) => onDragStart(event, 'messageNode')} draggable>
        //         <NodeButton variant="outlined" buttonText='Message' startIcon={<MessageRounded />} />
        //     </div>
        // </aside>
    );
};
