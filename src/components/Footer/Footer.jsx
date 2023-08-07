import * as React from "react";

import {
  Toolbar,
  Typography,
  Container,
  AppBar,
  Grid,
  Link,
  Box,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            Dottoressa Marina Tricoli Medico di Medicina Generale Cod. Reg. 145625
          </Typography>

          <Typography
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
           Dott.ssa M. Tricoli  MMG Cod.Reg.145625
          </Typography>
        </Toolbar>
        <Box sx={{ display: "flex" }} gap={1}>
          <CopyrightIcon />
          <Typography>Powered by Domenico Cucinotta</Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Footer;
