import React from "react";
import Typography from "@mui/material/Typography/Typography";
import AppBar from "@mui/material/AppBar/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Fade from '@mui/material/Fade/Fade';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const Header = () => {
  return (
    <HideOnScroll>
      <Fade in={true} timeout={2000}>
      <AppBar>
        <Typography variant="h1" align="center" sx={{ fontSize: 50 }}>
          Github user's repositories on demand
        </Typography>
      </AppBar>
      </Fade>
    </HideOnScroll>
  );
};

export default Header;
