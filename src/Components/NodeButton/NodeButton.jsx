import { BasicButton } from '../BasicComponents/Button/BasicButton';

import './NodeButton.min.css';

export default function NodeButton (props) {
  return (
    <BasicButton className='node-button' variant={props.variant} startIcon={props.startIcon} buttonText={props.buttonText} />
  )
}

