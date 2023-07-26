import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Grid,
  Typography,
} from "@mui/material";
import style from "./Servizi.module.css";

const Servizi = () => {
  const servizi = [
    "Cartella Computerizzata",
    "Visite Domiciliari",
    "Medicazioni",
    "Consulenza Telefonica",
    "Vaccini",
    "Certificati",
  ];
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h2" mb={2}>
          Servizi Offerti
        </Typography>
        <List>
          <Grid container>
            {servizi.map((el) => {
              return (
                <Grid key={el} item sm={6} xs={12}>
                  <ListItem>
                    <ListItemButton sx={{ cursor: "default" }}>
                      <ListItemText primary={el} />
                    </ListItemButton>
                  </ListItem>
                </Grid>
              );
            })}
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default Servizi;
