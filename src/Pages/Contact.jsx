import { Box, Typography } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 8, // space between items
          mt: 8,
          flexWrap: "wrap", // responsive for small screens
          textAlign: "center",
        }}
      >
        {/* Address */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <NearMeIcon
            fontSize="large"
            sx={{
              backgroundColor: "gray",
              color: "white",
              borderRadius: "50%",
              padding: "12px",
              mb: 2,
            }}
          />
          <Typography variant="h4" gutterBottom>
            Address
          </Typography>
          <Typography variant="h6">6834 Hollywood Blvd - Los Angeles CA</Typography>
        </Box>

        {/* Email */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <EmailIcon
            fontSize="large"
            sx={{
              backgroundColor: "gray",
              color: "white",
              borderRadius: "50%",
              padding: "12px",
              mb: 2,
            }}
          />
          <Typography variant="h4" gutterBottom>
            Email
          </Typography>
          <Typography variant="h6">info@example.com</Typography>
        </Box>

        {/* Contact */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CallIcon
            fontSize="large"
            sx={{
              backgroundColor: "gray",
              color: "white",
              borderRadius: "50%",
              padding: "12px",
              mb: 2,
            }}
          />
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
          <Typography variant="h6">+1 234 567 890</Typography>
        </Box>
      </Box>
    
  );
};

export default Contact;
