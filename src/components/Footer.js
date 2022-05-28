import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import Fade from "@mui/material/Fade/Fade";
import Typography from "@mui/material/Typography/Typography";

const Footer = () => {
  return (
    <Fade in={true} timeout={2000}>
      <footer align="center">
        <Button variant="outlined">
          <Link to="/">
            <Typography variant="h2" align="center" sx={{ fontSize: 30 }}>
              Home
            </Typography>
          </Link>
        </Button>
        <Button variant="outlined">
          <Link to="/about">
            <Typography variant="h2" align="center" sx={{ fontSize: 30 }}>
              About us
            </Typography>
          </Link>
        </Button>
      </footer>
    </Fade>
  );
};

export default Footer;
