import { Typography, Link, Container, Box } from "@mui/material";
import OrariStudio from "./OrariStudio/OrariStudio";
const Contatti = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" mb={2}>
        Contatti
      </Typography>
      <Typography mb={2}>
        Per visite, richieste, esami e ricette invia una mail a{" "}
        <Link href="mailto:tricolidoc@gmail.com">mailtricolidoc@gmail.com</Link>
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
    </Container>
  );
};

export default Contatti;
