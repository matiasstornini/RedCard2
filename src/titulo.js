import React from "react";

import Typography from "@material-ui/core/Typography";

//componente a exportar
const Titulo = () => {
  return (
    <div>
      <Typography variant="h3" component="h4">
        Red Card FUT
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        BETA 0.4
      </Typography>
    </div>
  );
};

//exportando el componente deseado
export default Titulo;
