import React from "react";

//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Btn from "./btn";

//componente a exportar
const BloquesBtn = () => {
  const AEsp = [
    <div>
      {" "}
      <Btn Valor={esp[0]} /> <Btn Valor={esp[1]} /> <Btn Valor={esp[2]} />{" "}
    </div>,
    <div>
      {" "}
      <Btn Valor={ing[0]} /> <Btn Valor={ing[1]} />{" "}
    </div>,
    <div>
      {" "}
      <Btn Valor={fra[0]} /> <Btn Valor={fra[1]} />{" "}
    </div>,
    ""
  ];
  return <div></div>;
};

//exportando el componente deseado
export default BloquesBtn;
