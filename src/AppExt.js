import React, { useState, useEffect } from "react";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableContainer,
  Paper
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Btn from "./btn";

import Button from "@material-ui/core/Button";

export default (props) => {
  const url = "https://5ovu5.csb.app/Datos.json";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <tr>
      {/*{props.data.rows.map((item, indx) => {*/}
      {!todos
        ? "Cargando..."
        : todos.map((todo, index) => {
            var dta = [];
            var date = new Date(todo.dt * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime =
              hours + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
            dta.push(formattedTime);
            return (
              <div>
                <Typography variant="h5" gutterBottom>
                  {todo.Competicion}:
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {dta} {todo.Partido}
                </Typography>
                {todo.Switch !== 0 ? (
                  <div>
                    <Btn Valor={todo.EnlaceMatchs.valor1} />{" "}
                    <Btn Valor={todo.EnlaceMatchs.valor2} />{" "}
                    <Btn Valor={todo.EnlaceMatchs.valor3} />
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    href={todo.Estadisticas}
                  >
                    Estadisticas
                  </Button>
                </div>
              </div>
            );
          })}
      {/*})}*/}
    </tr>
  );
};
