//  import Layout from '../Components/Layout/Layout'
//  import { Box, Typography } from '@mui/material'
//  import about from '../assets/about.jpeg'

//  const About = () => {
//    return (
//      <Layout>
//        <Box
//          sx={{
//            display: 'flex',
//            alignItems: 'center',
//            justifyContent: 'space-between',
//            padding: '50px',
//            gap: 4,
//            flexWrap: 'wrap', 
//          }}
//        >
        
//          <Box sx={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
//            <img
//              src={about}
//              alt='About'
//              style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
//            />
//          </Box>

        
//          <Box sx={{ flex: 1, minWidth: '300px' }}>
//            <Typography variant='h2' gutterBottom>
//              About Me.
//            </Typography>
//            <Typography variant='h5' gutterBottom>
//              UI / UX DESIGNER & WEB DEVELOPER
//            </Typography>
//            <Typography>
//              I am Nikhil Kumar. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, ad!
//              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit amet eius debitis sunt laudantium tenetur voluptatum, corrupti autem sequi itaque.
//            </Typography>
//          </Box>
//        </Box>
//      </Layout>
//    )
//  }

//  export default About

/***************************************************************************************** */
import { Box, Typography } from '@mui/material';

import about from '../assets/about.jpeg';

const About = () => {
  return (
    <Box
      id="about" // 👈 important for scrolling
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img src={about} alt="About" style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }} />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h2" gutterBottom>About Me</Typography>
        <Typography variant="h5" gutterBottom>UI / UX Designer & Web Developer</Typography>
        <Typography>
          I am Nikhil Kumar. Lorem Ipsum is simply dummy text...
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
