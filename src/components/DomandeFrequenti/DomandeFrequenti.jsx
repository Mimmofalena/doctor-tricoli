import {
  Typography,
  Link,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DOMANDE from "./Domande";
const DomandeFrequenti = () => {
  return (
    <>
      <Typography variant="h4" component="h2" mb={2}>
        Domande Frequenti
      </Typography>
      <Typography mb={2}>
        Qui di seguito vi sono riportate le domande più frequenti. Se pensi vi
        sia altro da aggiungere non esitare a farmelo sapere, critiche
        costruttive sono sempre ben accette. Basta inviare una{" "}
        <Link href="mailto:tricolidoc@gmail.com">tricolidoc@gmail.com</Link>
      </Typography>
      {DOMANDE.map((el, index) => {
        return (
          <Accordion key={el.title}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography>{el.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{el.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default DomandeFrequenti;
