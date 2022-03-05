let Title = [
  "Premier League",
  "Premier League",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Bundesliga",

  "Ligue 1",

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
  "Burnley - Chelsea",
  "Liverpool - West Ham United",

  "Osasuna - Villarreal",
  "Espanyol - Getafe",
  "Valencia - Granada",
  "Real Madrid - Real Sociedad",

  "Bayern München - Bayer Leverkusen",

  "Nice - PSG",

  "San Lorenzo - River Plate",
  "Patronato - Sarmiento",
  "Racing Club - Talleres Córdoba",

  "Junior - Unión Magdalena",
  "Deportivo Cali - América de Cali",
  "La Equidad - Patriotas Boyacá"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,burnley,chelsea-london,505915.php",
  "https://es.fcstats.com/partido,liverpool,west-ham-united,505917.php",

  "https://es.fcstats.com/partido,osasuna,villarreal,509889.php",
  "https://es.fcstats.com/partido,espanyol-barcelona,getafe,509888.php",
  "https://es.fcstats.com/partido,valencia,granada,509891.php",
  "https://es.fcstats.com/partido,real-madrid,real-sociedad,509890.php",

  "https://es.fcstats.com/partido,bayern-munchen,bayer-leverkusen,508847.php",

  "https://es.fcstats.com/partido,nice,paris-saint-germain,508136.php",

  "https://es.fcstats.com/partido,san-lorenzo,river-plate,549220.php",
  "https://es.fcstats.com/partido,patronato-parana,sarmiento,549218.php",
  "https://es.fcstats.com/partido,racing-club,talleres-de-cordoba,549219.php",

  "https://es.fcstats.com/partido,atletico-junior,union-magdalena,547606.php",
  "https://es.fcstats.com/partido,deportivo-cali,america-de-cali,547604.php",
  "https://es.fcstats.com/partido,la-equidad,patriotas,547607.php",

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

  AEsp[0],
  "",
  "",
  "",

  AAle[0],

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
