import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import style from "./Navbar.module.css";

const sections = ["Servizi", "Contatti", "Domande Frequenti"];

function Navbar(props) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const goToSectionHandler = (section) => {
      if (section === "Servizi") {
        props.goToServizi();
      }
      if (section === "Contatti") {
        props.goToContatti();
      }
      if (section === "Domande Frequenti") {
        props.goToDomandefrequenti();
      }
    };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{width:'100vw'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dott.ssa Tricoli
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dott.ssa Tricoli
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent:'end' }}>
            {sections.map((section) => (
              <Button
                key={section}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => goToSectionHandler(section)}
              >
                {section}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open Menu">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {sections.map((section) => (
                <MenuItem
                  key={section}
                  onClick={() => goToSectionHandler(section)}
                >
                  <Typography textAlign="center">{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
