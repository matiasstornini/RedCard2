import React, { useState, useEffect } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Titulo from "./titulo";
import Btn from "./btn";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

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
  const [theme, setTheme] = useState("light");

  const classes = useStyles();
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

  /*useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);
  /*const handleClick = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };*/
  function refreshPage() {
    window.location.reload(false);
  }
  var lis = [];
  var menu = [
    /*i*/ 2,
    /*dia*/ "17/06/2021",
    /*btn=1*/ "2",
    /*btn=2*/ 0,
    /*btn=3*/ 0
  ];

  for (var i = 0; i < Match.length; i++) {
    lis.push(
      <Typography variant="h6" gutterBottom>
        {dta[i]}
        {Match[i]}
      </Typography>
    );
    /*SWITCH*/
    switch (i) {
      case btn1:
        lis.push(
          <div className={classes.root}>
            <Btn Valor={conmebol[0]} />
            <Btn Valor={conmebol[1]} />
          </div>
        );
        break;
      case "5":
        lis.push(
          <div className={classes.root}>
            <Btn Valor={col[0]} />
          </div>
        );
        break;
      default:
      //console.log("default");
    }
    /*SWITCH*/
    /*if (i === btn1) {
      lis.push(
        <div className={classes.root}>
          <Btn Valor={ext[0]} />
        </div>
      );
    }*/
    lis.push(
      <div className={classes.root}>
        <Button variant="contained" color="primary" href={Est[i]}>
          Estadisticas
        </Button>
      </div>
    );
  }

  return (
    <ThemeProvider theme={appliedTheme}>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Titulo />
            </Paper>
          </Grid>
          <div className={classes.root}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={() => setTheme(!theme)}
            >
              {icon}
            </IconButton>
            <Button variant="outlined" color="secondary" onClick={refreshPage}>
              <RefreshIcon />
            </Button>
          </div>
          <div>
            <Typography variant="h4" component="h5">
              Calendario {datef}
            </Typography>
            <Divider />
          </div>
          <div>{lis}</div>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};
