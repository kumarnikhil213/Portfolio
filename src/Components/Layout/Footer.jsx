import{Box, Typography} from '@mui/material'

const Footer = () => {
  return (
   <Box 
   sx={{bgcolor:'black'}
   }>
    <Typography 
    variant='h5'
    textAlign={'center'}
     sx={{color:'whitesmoke'}}> 
        All right reserved &copy; Nikhil Ekghara
    </Typography>
   </Box>
  )
}

export default Footer;