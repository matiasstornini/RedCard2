let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "EFL CUP",

  "Bundesliga",

  "Serie A",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

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
  "Villarreal - Espanyol",
  "Sevilla - Real Betis",
  "Real Sociedad - Osasuna",
  "Barcelona - Athletic Club",

  "Chelsea - Liverpool",

  "Augsburg - Borussia Dortmund",

  "Lazio - Napoli",

  "Estudiantes - Arsenal",
  "Sarmiento - Unión Santa Fe",
  "River Plate - Racing Club",
  "Argentinos Juniors - San Lorenzo",

  "Unión Magdalena - Deportivo Cali",
  "Atlético Bucaramanga - Atlético Nacional",
  "América de Cali - Once Caldas"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,villarreal,espanyol-barcelona,509881.php",
  "https://es.fcstats.com/partido,sevilla,real-betis,509880.php",
  "https://es.fcstats.com/partido,real-sociedad,osasuna,509879.php",
  "https://es.fcstats.com/partido,fc-barcelona,athletic-bilbao,509873.php",

  "https://es.fcstats.com/partido,chelsea-london,liverpool,547936.php",

  "https://es.fcstats.com/partido,augsburg,borussia-dortmund,508837.php",

  "https://es.fcstats.com/partido,ss-lazio,napoli,523545.php",

  "https://es.fcstats.com/partido,estudiantes-de-la-plata,arsenal-de-sarandi,549201.php",
  "https://es.fcstats.com/partido,sarmiento,union-de-santa-fe,549208.php",
  "https://es.fcstats.com/partido,river-plate,racing-club,549206.php",
  "https://es.fcstats.com/partido,argentinos-juniors,san-lorenzo,549197.php",

  "https://es.fcstats.com/partido,union-magdalena,deportivo-cali,547600.php",
  "https://es.fcstats.com/partido,atletico-bucaramanga,atletico-nacional,547592.php",
  "https://es.fcstats.com/partido,america-de-cali,once-caldas,547591.php",

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
