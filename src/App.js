import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Titulo from "./titulo";
import Btn from "./btn";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default function ContainedButtons() {
  const classes = useStyles();
  var lis = [];
  //var abtn = [esp[0], esp[1], esp[2], ext[0], ext[1], ext[2]];

  for (var i = 0; i <= 1; i++) {
    lis.push(
      <Typography variant="h6" gutterBottom>
        {dta[i]}
        {Match[i]}
      </Typography>
    );

    if (i === 1) {
      lis.push(
        <div className={classes.root}>
          <Btn Valor={ext[0]} />
          <Btn Valor={ext[0]} />
        </div>
      );
    }
    lis.push(
      <div className={classes.root}>
        <Button variant="contained" color="primary" href={Est[i]}>
          Estadisticas
        </Button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Titulo />
        <div>{lis}</div>
      </Container>
    </React.Fragment>
  );
}
