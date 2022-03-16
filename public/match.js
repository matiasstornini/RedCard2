let Title = [
  "Bundesliga",

  "Premier League",
  "Premier League",

  "UEFA Champions League",
  "UEFA Champions League",

  "Conmebol Libertadores",
  "Conmebol Libertadores",

  "Liga Dimayor Colombia",
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
  "Mainz 05 - Borussia Dortmund",

  "Brighton & Hove Albion - Tottenham Hotspur",
  "Arsenal - Liverpool",

  "Juventus - Villarreal",
  "Lille - Chelsea",

  "Estudiantes - Everton",
  "Olimpia - Fluminense",

  "Deportes Tolima - Patriotas Boyacá",
  "Atlético Bucaramanga - Deportivo Cali",
  "Deportivo Pasto - Santa Fe"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,fsv-mainz-05,borussia-dortmund,508851.php",

  "https://es.fcstats.com/partido,brighton-hove-albion,tottenham-hotspur,505796.php",
  "https://es.fcstats.com/partido,arsenal-london,liverpool,505904.php",

  "https://es.fcstats.com/partido,juventus-torino,villarreal,545370.php",
  "https://es.fcstats.com/partido,lille,chelsea-london,545371.php",

  "https://es.fcstats.com/partido,estudiantes-de-la-plata,everton-vina-del-mar,557666.php",
  "https://es.fcstats.com/partido,olimpia-asuncion,fluminense,557753.php",

  "https://es.fcstats.com/partido,deportes-tolima,patriotas,547614.php",
  "https://es.fcstats.com/partido,atletico-bucaramanga,deportivo-cali,547613.php",
  "https://es.fcstats.com/partido,deportivo-pasto,santa-fe,547615.php",

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

for (var i = 0; i <= ustat.length - 23; i++) {
  //Est.push("" + ustat[i]);
  Est.push("https://pirlotv2.herokuapp.com/full/app/test/est?url=" + ustat[i]);
}

let Enl = [
  "",

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
