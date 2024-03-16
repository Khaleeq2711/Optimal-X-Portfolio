import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const drawerWidth = 240;
// const options = ["Hello", "Bello", "Ello"];
// const navItems = ["Home", "Services", "About", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [drawerValue, setDrawerValue] = useState(null);

  let open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    event.currentTarget.style.overflow = "hidden";
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    const body = document.getElementsByTagName("body")[0];

    body.style.overflow = "unset !important";
    document.body.style.overflow = "unset important";
    event.currentTarget.style.overflow = "unset";
  };
  // const navigateHandler = (location) => {
  //   if (location !== "Home") {
  //     navigate(`/${location}`);
  //   } else {
  //     navigate("/");
  //   }
  // };
  const handleDrawerToggle = (event) => {
    if (event.target.value !== undefined) {
      setDrawerValue(2);
      return;
    }
    setMobileOpen((prevState) => !prevState);
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      backgroundColor: "black",
      color:
        theme.palette.mode === "light"
          ? "rgb(185, 185, 185)"
          : theme.palette.white[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      value={drawerValue}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h5" sx={{ my: 2 }}>
        <Link
          style={{
            width: "100%",
            textAlign: "center",
            color: "#fff",
            textDecoration: "none",
            fontFamily: "Jacques Francois",
          }}
          to={"/"}
          // end
        >
          Optimal X
        </Link>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink
              style={{
                width: "100%",
                textAlign: "center",
                color: "#fff",
                margin: "1px 5px",
                textDecoration: "none",
              }}
              to={"/"}
              className={({ isActive }) => (isActive ? style.active : "")}
              // end
            >
              Home
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                color: "#fff",
                margin: "0 5px",
                textDecoration: "none",
              }}
              // end
            >
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="nav"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Services
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <NavLink
                  to={"/Branding"}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  id="Personal Branding"
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemButton sx={{ textAlign: "left" }}>
                      Personal Branding & SMM
                    </ListItemButton>
                  </MenuItem>
                </NavLink>
                <NavLink
                  to={"/Webservice"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="Web Apps"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemButton sx={{ textAlign: "left" }}>
                      Web Apps
                    </ListItemButton>
                  </MenuItem>
                </NavLink>
                <NavLink
                  to={"/Digital"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="Digital Marketing"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemButton sx={{ textAlign: "left" }}>
                      Digital Marketing & SEO
                    </ListItemButton>
                  </MenuItem>
                </NavLink>
                <NavLink
                  // to={"/Mobile"}
                  to={"/Short"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="Short Form"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemButton sx={{ textAlign: "left" }}>
                      {/* Mobile Apps */}
                      Short-Form Content
                    </ListItemButton>
                  </MenuItem>
                </NavLink>
                <NavLink
                  to={"/Designing"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="UI/UX"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemButton sx={{ textAlign: "left" }}>
                      UI/UX & Graphics Designing
                    </ListItemButton>
                  </MenuItem>
                </NavLink>
                <NavLink
                  to={"/Ecommerce"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="Ecommerce"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <ListItemButton sx={{ textAlign: "left" }}>
                      E-Commerce Consultation
                    </ListItemButton>
                  </MenuItem>
                </NavLink>
              </StyledMenu>
            </div>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink
              style={{
                width: "100%",
                textAlign: "center",
                color: "#fff",
                margin: "1px 5px",
                textDecoration: "none",
              }}
              to={"/About"}
              className={({ isActive }) => (isActive ? style.active : "")}
              // end
            >
              About
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink
              className={style.btn_contact}
              style={{ width: "80%", margin: "auto", textAlign: "center" }}
              to={"/Contact"}
            >
              Contact
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.223)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, padding: "2px" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <NavLink
              style={{
                width: "100%",
                textAlign: "center",
                color: "#fff",
                textDecoration: "none",
                padding: "30px",
                fontFamily: "Jacques Francois",
              }}
              to={"/"}
              // end
            >
              Optimal X
            </NavLink>{" "}
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
            }}
            className={style.nav}
          >
            <NavLink
              style={{
                color: "#fff",
                margin: "1px 5px",
                textDecoration: "none",
              }}
              to={"/"}
              className={({ isActive }) => (isActive ? style.active : "")}
              // end
            >
              Home
            </NavLink>
            <div
              style={{
                width: "auto",
                color: "#fff",
                margin: "1px 2px",
                textDecoration: "none",
              }}
            >
              {/*------------------------------------------------------------------------------- */}
              <Button
                id="demo-customized-button1"
                aria-controls={open ? "demo-customized-menu1" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="nav"
                // disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Services
              </Button>
              <StyledMenu
                id="demo-customized-menu1"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button1",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <NavLink
                  to={"/Branding"}
                  id="Personal Branding"
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    Personal Branding & SMM
                  </MenuItem>
                </NavLink>
                <NavLink
                  to={"/Webservice"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="Web Apps"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    Web Apps
                  </MenuItem>
                </NavLink>
                <NavLink
                  to={"/Digital"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="Digital Marketing"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    Digital Marketing & SEO
                  </MenuItem>
                </NavLink>
                <NavLink
                  // to={"/Mobile"}
                  to={"/Short"}
                  id="Short Form"
                  className={({ isActive }) => (isActive ? style.active : "")}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    {/* Mobile Apps */}
                    Short-Form Content
                  </MenuItem>
                </NavLink>
                <NavLink
                  to={"/Designing"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="UI/UX"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    UI/UX & Graphics Designing
                  </MenuItem>
                </NavLink>
                <NavLink
                  to={"/Ecommerce"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                  id="Ecommerce"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    E-Commerce Consultation
                  </MenuItem>
                </NavLink>
              </StyledMenu>
            </div>
            <NavLink
              style={{
                color: "#fff",
                margin: "1px 5px",
                textDecoration: "none",
              }}
              to={"/About"}
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              About
            </NavLink>
            <NavLink className={style.btn_contact} to={"/Contact"}>
              Contact
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(0, 0, 0, 0.900)",
              color: "white",
              paddingTop: "1%",
              borderRight: "1px solid White",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        {/* <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod
          itaque exercitationem, at ab sequi qui modi delectus quia corrupti
          alias distinctio nostrum. Minima ex dolor modi inventore sapiente
          necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
          sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
          eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
          temporibus beatae doloremque voluptatum doloribus soluta accusamus
          porro reprehenderit eos inventore facere, fugit, molestiae ab officiis
          illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis,
          voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis
          obcaecati error, delectus quo eius exercitationem tempore. Delectus
          sapiente, provident corporis dolorum quibusdam aut beatae repellendus
          est labore quisquam praesentium repudiandae non vel laboriosam quo ab
          perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
          commodi nihil corrupti cum non fugiat praesentium doloremque
          architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
          molestiae dicta blanditiis est expedita eius debitis cupiditate porro
          sed aspernatur quidem, repellat nihil quasi praesentium quia eos,
          quibusdam provident. Incidunt tempore vel placeat voluptate iure
          labore, repellendus beatae quia unde est aliquid dolor molestias
          libero. Reiciendis similique exercitationem consequatur, nobis placeat
          illo laudantium! Enim perferendis nulla soluta magni error, provident
          repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure
          suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore
          commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque
          eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt
          ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat
          rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam
          facilis libero dolorem dolores sunt inventore perferendis, aut
          sapiente modi nesciunt.
        </Typography> */}
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
