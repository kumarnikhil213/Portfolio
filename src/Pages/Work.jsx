import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Magnetic from "../assets/Magnetic.jpeg"; 
import Electrical from "../assets/Electrical Design.jpg";
import Graphic from "../assets/Graphic.jpg";
import Mobile from "../assets/Mobile.avif"
import Motor from "../assets/Motor.jpg"
import Digital from "../assets/Digital.jpg"

const portfolioItems = [
  { id: 1, title: "Branding", category: "Brand", image: Magnetic, description: "Creative branding design project with modern touch." },
  { id: 2, title: "Branding", category: "Brand", image: Mobile, description: "Beautiful custom illustrations and concept art."},
  { id: 3, title: "Design", category: "Design", image: Electrical, description: "Technical design layout with precision and innovation."},
  { id: 4, title: "Design", category: "Design", image: Motor, description: "Technical design layout with precision and innovation."},
  { id: 5, title: "Graphic", category: "Graphic", image: Graphic, description: "Beautiful custom illustrations and concept art." },
   { id: 6, title: "Graphic", category: "Graphic", image: Digital, description: "Beautiful custom illustrations and concept art." }
  
];

const categories = ["All", "Brand", "Design", "Graphic"];

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <Box sx={{ textAlign: "center", py: 8, backgroundColor: "whitesmoke" }}>
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4 }}>
        Portfolio
      </Typography>

      {/* Category Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 6 }}>
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            sx={{
              fontWeight: "bold",
              color: selectedCategory === cat ? "black" : "gray",
              borderBottom: selectedCategory === cat ? "2px solid black" : "none",
              borderRadius: 0,
              textTransform: "none",
              fontSize: "1.1rem",
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      {/* Portfolio Cards */}
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}>
        {filteredItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 300,
              backgroundColor: "#fff",
              borderRadius: "16px",
              p: 4,
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 20px rgba(0,0,0,0.25)" },
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{ width: "100%", height: 180, borderRadius: "12px", mb: 2, objectFit: "cover" }}
            />
            <Typography variant="h5" gutterBottom>{item.title}</Typography>
            <Typography variant="body1" sx={{ color: "gray" }}>{item.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Works;
