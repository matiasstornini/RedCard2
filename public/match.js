let Title = [
  "Premier League",
  "Premier League",
  "Premier League",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Serie A",

  "Bundesliga",

  "Ligue 1",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

  "Liga Dimayor Colombia",
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
  "Leeds United - Tottenham Hotspur",
  "Manchester United - Watford",
  "Everton - Manchester City",

  "Mallorca - Valencia",
  "Getafe - Deportivo Alavés",
  "Rayo Vallecano - Real Madrid",
  "Atlético Madrid - Celta de Vigo",

  "Empoli - Juventus",

  "Eintracht Frankfurt - Bayern München",

  "PSG - Saint-Étienne",

  "Colón - Barracas Central",
  "Rosario Central - Godoy Cruz",
  "Aldosivi - Central Córdoba SdE",
  "Independiente - Boca Juniors",

  "Envigado - Jaguares de Córdoba",
  "Deportivo Pereira - La Equidad",
  "Deportes Tolima - Junior",
  "Millonarios - Cortuluá"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,leeds-united,tottenham-hotspur,505910.php",
  "https://es.fcstats.com/partido,manchester-united,watford,505911.php",
  "https://es.fcstats.com/partido,everton,manchester-city,505909.php",

  "https://es.fcstats.com/partido,mallorca,valencia,509877.php",
  "https://es.fcstats.com/partido,getafe,deportivo-alaves,509874.php",
  "https://es.fcstats.com/partido,rayo-vallecano,real-madrid,509878.php",
  "https://es.fcstats.com/partido,atletico-madrid,celta-de-vigo,509872.php",

  "https://es.fcstats.com/partido,empoli,juventus-torino,523543.php",

  "https://es.fcstats.com/partido,eintracht-frankfurt,bayern-munchen,508841.php",

  "https://es.fcstats.com/partido,paris-saint-germain,saint-etienne,508127.php",

  "https://es.fcstats.com/partido,rosario-central,godoy-cruz,549207.php",
  "https://es.fcstats.com/partido,aldosivi,central-cordoba,549196.php",
  "https://es.fcstats.com/partido,colon,barracas-central,549199.php",
  "https://es.fcstats.com/partido,independiente,boca-juniors,549203.php",

  "https://es.fcstats.com/partido,envigado-fc,jaguares-de-cordoba,547595.php",
  "https://es.fcstats.com/partido,deportivo-pereira,la-equidad,547599.php",
  "https://es.fcstats.com/partido,deportes-tolima,atletico-junior,547593.php",
  "https://es.fcstats.com/partido,millonarios,cortulua,547597.php",

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
  Extra[1],
  "",

  "",
  ACol[0],
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
