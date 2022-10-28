import { Handle, Position } from 'reactflow';
import './MessageNode.min.css';
import Whatsapp from './Assets/Icons/WA.png';
import Chat from './Assets/Icons/Chat.png';
import { Typography } from '@mui/material';

export const MessageNode = (props) => {
    return (
        <div className='message-node'>
            <div className='message-node-header'>
                <Handle type="target" position={Position.Right} isValidConnection={props.isValidConnection} />
                <div className='node-header'>
                    <img src={Chat} alt="Whatsapp" className="chat-image" />
                    <span>
                        Send Message
                    </span>
                    <span className="white-background">
                        <img src={Whatsapp} alt="Whatsapp" className="whatsapp-image" />
                    </span>
                </div>
                <Handle type="source" position={Position.Left} id="a" />
            </div>
            <div className='message-text'>
                <Typography variant="string" gutterBottom>
                    Dummy Message
                </Typography>
            </div>
        </div>
    );
}


