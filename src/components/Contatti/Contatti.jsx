import { Typography, Link, Container, Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import OrariStudio from "./OrariStudio/OrariStudio";
const Contatti = () => {
  const mapPosition = [38.1469877, 13.3391305];
  return (
    <>
      <Container>
        <Typography variant="h4" component="h2" mb={2}>
          Contatti
        </Typography>
        <Typography mb={2}>
          Per visite, richieste, esami e ricette invia una mail a{" "}
          <Link href="mailto:tricolidoc@gmail.com">
            tricolidoc@gmail.com
          </Link>
        </Typography>
        <Typography mb={2}>
          Per consulto medico indifferibile chiama{" "}
          <Link href="tel:351-2530433">351-2530433</Link> o{" "}
          <Link href="tel:091-520120">091-520120</Link>
        </Typography>
        <Typography>
          <strong>NB</strong>: Le telefonate durante l'orario di visita verranno
          visualizzate e si verrà ricontattati alla fine del ricevimento
          ambulatoriale, nel rispetto del paziente in visita e al fine di
          garantire un migliore ascolto.
        </Typography>
        <Box mt={2}>
          <OrariStudio />
        </Box>
        <MapContainer
          center={mapPosition}
          zoom={17}
          scrollWheelZoom={false}
          style={{ height: "300px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition} title="Dottoressa Tricoli">
            <Popup>Dottoressa Tricoli, Via emilia 34</Popup>
          </Marker>
        </MapContainer>
      </Container>
    </>
  );
};

export default Contatti;
