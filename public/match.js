let Title = [
  "Europa League",
  "Europa League",
  "Europa League",
  "Europa League",
  "Europa League",

  "Premier League",

  "Liga Profesional Argentina",

  "Conmebol Libertadores",

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
  "Dinamo Zagreb - Sevilla",
  "Real Sociedad - RB Leipzig",
  "Napoli - Barcelona",
  "Rangers - Borussia Dortmund",
  "Real Betis - Zenit",

  "Arsenal - Wolverhampton Wanderers",

  "Huracán - Vélez Sarsfield",

  "Olimpia - Atlético Nacional"
];

let Est = [
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,dinamo-zagreb,sevilla,545386.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,real-sociedad,rb-leipzig,545391.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,napoli,fc-barcelona,545388.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,rangers,borussia-dortmund,545390.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,real-betis,zenit-st-petersburg,545384.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,arsenal-london,wolverhampton-wanderers,505834.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,huracan,velez-sarsfield,549202.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,olimpia-asuncion,atletico-nacional,556475.php",

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
