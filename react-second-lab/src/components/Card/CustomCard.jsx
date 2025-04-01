import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const CustomCard = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        padding: "15px",
      }}
    >
      <CardMedia component="img" height="200" image={image} alt={title} sx={{ objectFit: "cover" }} />
      <CardContent sx={{ paddingBottom: "20px" }}>
        <Typography variant="h6" sx={{ margin: "10px 0", fontSize: "24px" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="#555" sx={{ fontSize: "16px", marginBottom: "15px" }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "12px 24px",
            backgroundColor: "#170057",
            color: "white",
            borderRadius: "6px",
            transition: ".3s",
            marginBottom: "15px",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "#034c00",
              transform: "scale(1.1)",
              boxShadow: "0 0 7px 1.5px #04680080",
            },
          }}
          onClick={handleClick}
        >
          Дізнатися більше
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;