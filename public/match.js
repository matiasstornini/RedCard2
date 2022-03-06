let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Premier League",
  "Premier League",

  "Serie A",
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
  "Cádiz - Rayo Vallecano",
  "Elche - Barcelona",
  "Celta de Vigo - Mallorca",
  "Real Betis - Atlético Madrid",

  "Watford - Arsenal",
  "Manchester City - Manchester United",

  "Juventus - Spezia",
  "Napoli - Milan",

  "Banfield - Defensa y Justicia",
  "Newell's Old Boys - Atlético Tucumán",
  "Boca Juniors - Huracán",
  "Vélez Sarsfield - Estudiantes",

  "Alianza Petrolera - Atlético Bucaramanga",
  "Santa Fe - Millonarios",
  "Atlético Nacional - Medellín"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,cadiz,rayo-vallecano,509885.php",
  "https://es.fcstats.com/partido,elche,fc-barcelona,509887.php",
  "https://es.fcstats.com/partido,celta-de-vigo,mallorca,509886.php",
  "https://es.fcstats.com/partido,real-betis,atletico-madrid,509884.php",

  "https://es.fcstats.com/partido,watford,arsenal-london,505922.php",
  "https://es.fcstats.com/partido,manchester-city,manchester-united,505918.php",

  "https://es.fcstats.com/partido,juventus-torino,spezia-calcio,523557.php",
  "https://es.fcstats.com/partido,napoli,ac-milan,523558.php",

  "https://es.fcstats.com/partido,banfield,defensa-y-justicia,549211.php",
  "https://es.fcstats.com/partido,newells-old-boys,atletico-tucuman,549217.php",
  "https://es.fcstats.com/partido,boca-juniors,huracan,549213.php",
  "https://es.fcstats.com/partido,velez-sarsfield,estudiantes-de-la-plata,549223.php",

  "https://es.fcstats.com/partido,alianza-petrolera,atletico-bucaramanga,547609.php",
  "https://es.fcstats.com/partido,santa-fe,millonarios,547610.php",
  "https://es.fcstats.com/partido,atletico-nacional,independiente-medellin,547602.php",

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
  AEsp[0],
  "",
  "",
  "",

  AIng[0],
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
