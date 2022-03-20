let Title = [
  "Ligue 1",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Serie A",

  "FA CUP",
  "FA CUP",

  "Bundesliga",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

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
  "Mónaco - PSG",

  "Espanyol - Mallorca",
  "Cádiz - Villarreal",
  "Celta de Vigo - Real Betis",
  "Sevilla - Real Sociedad",
  "Real Madrid - Barcelona",

  "Juventus - Salernitana",

  "Southampton - Manchester City",
  "Nottingham Forest - Liverpool",

  "Köln - Borussia Dortmund",

  "Rosario Central - Newell's Old Boys",
  "Gimnasia La Plata - Estudiantes",
  "River Plate - Boca Juniors",

  "Envigado - La Equidad",
  "Deportivo Pereira - Junior"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,monaco,paris-saint-germain,508155.php",

  "https://es.fcstats.com/partido,espanyol-barcelona,mallorca,509907.php",
  "https://es.fcstats.com/partido,cadiz,villarreal,509904.php",
  "https://es.fcstats.com/partido,celta-de-vigo,real-betis,509905.php",
  "https://es.fcstats.com/partido,sevilla,real-sociedad,509911.php",
  "https://es.fcstats.com/partido,real-madrid,fc-barcelona,509910.php",

  "https://es.fcstats.com/partido,juventus-torino,salernitana,523577.php",

  "https://es.fcstats.com/partido,southampton,manchester-city,558833.php",
  "https://es.fcstats.com/partido,nottingham-forest,liverpool,558834.php",

  "https://es.fcstats.com/partido,fc-koln,borussia-dortmund,508866.php",

  "https://es.fcstats.com/partido,rosario-central,newells-old-boys,549248.php",
  "https://es.fcstats.com/partido,gimnasia-la-plata,estudiantes-de-la-plata,549244.php",
  "https://es.fcstats.com/partido,river-plate,boca-juniors,549247.php",

  "https://es.fcstats.com/partido,envigado-fc,la-equidad,547616.php",
  "https://es.fcstats.com/partido,deportivo-pereira,atletico-junior,547618.php",

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
  AEsp[0],

  "",

  "",
  "",

  "",

  "",
  AArg[0],
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
