import React from "react";
import CustomCard from "../Card/CustomCard";
import { Container, Grid, Typography } from "@mui/material";

const Main = ({ cards }) => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "20px" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: "28px",
          fontWeight: "500",
          backgroundColor: "#07004a",
          boxShadow: "0 0 7px 3px #07004a80",
          borderRadius: "35px",
          color: "#fff",
          padding: "15px 30px",
          marginBottom: "20px",
          display: "inline-block",
        }}
      >
        Галерея карток
      </Typography>
      {/* Контейнер для карток */}
      <Grid 
        container 
        spacing={3} 
        justifyContent="center"  // Центрує картки по горизонталі
        alignItems="center"      // Центрує по вертикалі (не обов’язково, але корисно)
      >
        {cards.map((card) => (
          <Grid item key={card.id}>
            <CustomCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
