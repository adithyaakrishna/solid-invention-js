import { Alert } from '@mui/material'
import './BasicAlert.min.css';

export const BasicAlert = (props) => {
  const { iconVisible, severity, alertText, variant} = props
  return (
    <Alert className='basic-alert' icon={iconVisible} severity={severity} variant={variant}>
        {alertText}
    </Alert>
  )
}