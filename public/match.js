let Title = [
  "Ligue 1",

  "Premier League",
  "Premier League",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Serie A",
  "Serie A",

  "Bundesliga",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
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
  "PSG - Bordeaux",

  "Chelsea - Newcastle United",
  "Arsenal - Leicester City",

  "Rayo Vallecano - Sevilla",
  "Real Betis - Athletic Club",
  "Real Sociedad - Deportivo Alavés",
  "Barcelona - Osasuna",

  "Hellas Verona - Napoli",
  "Torino - Internazionale",

  "Borussia Dortmund - Arminia Bielefeld",

  "Lanús - Colón",
  "Unión Santa Fe - Banfield",
  "River Plate - Gimnasia La Plata",
  "Estudiantes - Boca Juniors"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,paris-saint-germain,bordeaux,508147.php",

  "https://es.fcstats.com/partido,chelsea-london,newcastle-united,505927.php",
  "https://es.fcstats.com/partido,arsenal-london,leicester-city,505924.php",

  "https://es.fcstats.com/partido,rayo-vallecano,sevilla,509899.php",
  "https://es.fcstats.com/partido,real-betis,athletic-bilbao,509894.php",
  "https://es.fcstats.com/partido,real-sociedad,deportivo-alaves,509900.php",
  "https://es.fcstats.com/partido,fc-barcelona,osasuna,509893.php",

  "https://es.fcstats.com/partido,hellas-verona,napoli,523570.php",
  "https://es.fcstats.com/partido,torino,internazionale-milano,523568.php",

  "https://es.fcstats.com/partido,borussia-dortmund,arminia-bielefeld,508858.php",

  "https://es.fcstats.com/partido,lanus,colon,549231.php",
  "https://es.fcstats.com/partido,union-de-santa-fe,banfield,549237.php",
  "https://es.fcstats.com/partido,river-plate,gimnasia-la-plata,549233.php",
  "https://es.fcstats.com/partido,estudiantes-de-la-plata,boca-juniors,549228.php",

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
  AFra[0],

  AIng[0],
  "",

  AEsp[1],
  "",
  "",
  "",

  AIta[0],
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
