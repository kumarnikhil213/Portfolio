// import { Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import '../../Styles/HeaderStyle.css';


// const Header = () => {
//   return (
//     <div className='navigation-menu'>
//       <Box>
//         <ul>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/about'>About</Link></li>
//           <li><Link to='/services'>Services</Link></li>
//           <li><Link to='/contact'>Contact</Link></li>
//         </ul>
//       </Box>
//     </div>
//   );
// };

// export default Header;

/************************************************************************************************ */


import React, { useState, useEffect } from "react";
import { AppBar, Box, Button, Toolbar, Slide, useScrollTrigger } from "@mui/material";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 👇 Scroll detection logic
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // scrolling down → hide
    } else {
      setShow(true); // scrolling up → show
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Slide appear={false} direction="down" in={show}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(0,0,0,0.8)",
          transition: "0.3s",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              width: "100%",
            }}
          >
            <Button color="inherit" onClick={() => scrollToSection("home")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("services")}>
              Services
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("contact")}>
              Work
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;
