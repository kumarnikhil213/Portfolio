import { Box, Typography } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer';
import CampaignIcon from '@mui/icons-material/Campaign';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const Services = () => {
  const services = [
    {
      icon: <ComputerIcon fontSize="large" sx={{ color: '#00050aff' }} />,
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates."
    },
    {
      icon: <CampaignIcon fontSize="large" sx={{ color: '#00050aff' }} />,
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates."
    },
    {
    icon: <BeachAccessIcon fontSize="large" sx={{ color: '#00050aff' }} />,
      title: "Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates."
    },
    {
    icon: < EmojiObjectsIcon fontSize="large" sx={{ color: '#00050aff' }} />,
      title: "Creative Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates."
    },
     {
    icon: < PersonalVideoIcon fontSize="large" sx={{ color: '#00050aff' }} />,
      title: "Fuly Responsive",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates."
    },
    {
    icon: < CameraAltIcon fontSize="large" sx={{ color: '#00050aff' }} />,
      title: "Retina Ready",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates."
    }
  ];

  return (
    
      <Box 
        sx={{ 
          backgroundColor: 'whitesmoke', 
          textAlign: 'center', 
          minHeight: '100vh', 
          py: 6 
        }}
      >
        <Typography variant='h2' gutterBottom>
          Services
        </Typography>

        
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 4, 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            mt: 4 
          }}
        >
          {services.map((service, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                maxWidth: 300, 
                backgroundColor: '#fff', 
                borderRadius: '16px', 
                p: 4, 
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
              }}
            >
              <Box 
                sx={{
                  backgroundColor: '#dfe4e9',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                {service.icon}
              </Box>

              <Typography variant='h5' gutterBottom>
                {service.title}
              </Typography>

              <Typography variant='body1' sx={{ color: 'gray' }}>
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
  
  )
}

export default Services;

