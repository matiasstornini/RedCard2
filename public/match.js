let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",
  /*"FA CUP",
  "FA CUP",
  "FA CUP",*/
  "Ligue 1",
  "Serie A",
  "Serie A",
  "Serie A",
  "Serie A",

  /**/
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR"
];
let Match = [
  "Rayo Vallecano - Real Betis",
  "Sevilla - Getafe",
  "Deportivo Alavés - Athletic Club",
  "Osasuna - Cádiz",
  "Villarreal - Atlético Madrid",

  "Olympique Lyonnais - PSG",

  "Venezia - Milan",
  "Napoli - Sampdoria",
  "Roma - Juventus",
  "Internazionale - Lazio"
];

let Est = [
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,levante,mallorca,509815.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,real-sociedad,celta-de-vigo,509819.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,granada,fc-barcelona,509814.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,real-madrid,valencia,509818.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,chelsea-london,chesterfield,545558.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,eintracht-frankfurt,borussia-dortmund,508786.php",

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
  AEsp[0],
  "",
  "",
  "",
  "",

  "",

  AIta[0],
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
