let Title = [
  "Premier League",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Serie A",
  "Serie A",
  "Serie A",

  "FA CUP",

  "Bundesliga",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

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
  "Aston Villa - Arsenal",

  "Deportivo Alavés - Granada",
  "Elche - Valencia",
  "Osasuna - Levante",
  "Rayo Vallecano - Atlético Madrid",

  "Napoli - Udinese",
  "Internazionale - Fiorentina",
  "Cagliari - Milan",

  "Middlesbrough - Chelsea",

  "Bayern München - Union Berlin",

  "Lanús - Banfield",
  "San Lorenzo - Huracán",
  "Colón - Unión Santa Fe",
  "Independiente - Racing Club",

  "Alianza Petrolera - Rionegro Águilas",
  "América de Cali - Medellín"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,aston-villa,arsenal-london,505934.php",

  "https://es.fcstats.com/partido,deportivo-alaves,granada,509902.php",
  "https://es.fcstats.com/partido,elche,valencia,509906.php",
  "https://es.fcstats.com/partido,osasuna,levante,509908.php",
  "https://es.fcstats.com/partido,rayo-vallecano,atletico-madrid,509909.php",

  "https://es.fcstats.com/partido,napoli,udinese,523578.php",
  "https://es.fcstats.com/partido,internazionale-milano,fiorentina,523576.php",
  "https://es.fcstats.com/partido,cagliari-calcio,ac-milan,523573.php",

  "https://es.fcstats.com/partido,middlesbrough,chelsea-london,558831.php",

  "https://es.fcstats.com/partido,bayern-munchen,union-berlin,508864.php",

  "https://es.fcstats.com/partido,lanus,banfield,549246.php",
  "https://es.fcstats.com/partido,san-lorenzo,huracan,549249.php",
  "https://es.fcstats.com/partido,colon,union-de-santa-fe,549242.php",
  "https://es.fcstats.com/partido,independiente,racing-club,549245.php",

  "https://es.fcstats.com/partido,alianza-petrolera,rionegro-aguilas,547619.php",
  "https://es.fcstats.com/partido,america-de-cali,independiente-medellin,547611.php",

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

  "",
  "",
  "",
  AArg[0],

  ACol[0],
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
