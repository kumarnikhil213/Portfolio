
import { Box, Typography, Stack, IconButton } from '@mui/material'
import Mountain from '../assets/mountain.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState, useEffect } from 'react';

const Home = () => {
  const roles = ['Nikhil Kumar','a Developer', 'a Writer', 'a Designer']; 
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing) {
        
        setText(prev => prev + roles[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
        if (charIndex + 1 === roles[wordIndex].length) {
          setTyping(false);
        }
      } else {
        
        setText(prev => prev.slice(0, -1));
        if (text.length === 0) {
          setTyping(true);
          setWordIndex((wordIndex + 1) % roles.length);
          setCharIndex(0);
        }
      }
    }, 300); 

    return () => clearTimeout(timeout);
  }, [text, typing, charIndex, wordIndex, roles]);

  return (
    
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Mountain})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant='h2' gutterBottom>
          Hello
        </Typography>

        <Typography variant='h4'>
          I am  <span style={{ color: '#0a2fa8ff' }}>{text}</span>
          <span style={{ borderRight: '2px solid #0214cfff', marginLeft: 2 }}></span>
        </Typography>

        <Stack direction="row" spacing={2} mt={4}>
          <IconButton sx={{ color: '#fff' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Box>
    
  )
}

export default Home;