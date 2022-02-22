let Title = [
  "UEFA Champions League",
  "UEFA Champions League",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",

  "Liga Dimayor Colombia",
  "Liga Dimayor Colombia",

  /**/
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR"
];
let Match = [
  "Chelsea - Lille",
  "Villarreal - Juventus",

  "Patronato - Talleres Córdoba",
  "Unión Santa Fe - Atlético Tucumán",
  "Central Córdoba SdE - Colón",
  "Racing Club - Argentinos Juniors",

  "Everton - Monagas",
  "Millonarios - Fluminense",
  "Plaza Colonia - The Strongest",

  "Rionegro Águilas - Patriotas Boyacá",
  "Once Caldas - Deportivo Pasto"
];

let Est = [
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,chelsea-london,lille,545362.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,villarreal,juventus-torino,545367.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,patronato-parana,talleres-de-cordoba,549192.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,union-de-santa-fe,atletico-tucuman,549193.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,central-cordoba,colon,549194.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,racing-club,argentinos-juniors,549195.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,everton-vina-del-mar,monagas-sc,556468.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,millonarios,fluminense,556469.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,plaza-colonia,the-strongest,556470.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,rionegro-aguilas,patriotas,547581.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,once-caldas,deportivo-pasto,547589.php",

  /** ***TEST*** */
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estaisticas-no-disp.html"
];

let Enl = [
  AIng[0],
  AEsp[0],

  "",
  "",
  "",
  "",

  "",
  "",
  "",

  "",
  "",

  /** */
  /** */
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1"
];

function formatDate(date) {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 101).toString().substring(1);
  var day = (date.getDate() + 100).toString().substring(1);
  return day + "/" + month + "/" + year;
}

//Usage example:
//alert(formatDate(new Date()));
let HOY = formatDate(new Date());
