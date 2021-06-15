import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Titulo from "./titulo";
import Btn from "./btn";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );
  function refreshPage() {
    window.location.reload(false);
  }
  var lis = [];
  //var abtn = [esp[0], esp[1], esp[2], ext[0], ext[1], ext[2]];

  for (var i = 0; i <= 1; i++) {
    lis.push(
      <Typography variant="h6" gutterBottom>
        {dta[i]}
        {Match[i]}
      </Typography>
    );

    if (i === "1") {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Titulo />
            </Paper>
          </Grid>
          <div className={classes.root}>
            <Button variant="outlined" color="secondary" onClick={refreshPage}>
              <RefreshIcon />
            </Button>
          </div>
          <div>{lis}</div>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
