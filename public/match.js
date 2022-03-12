let Title = [
  "Premier League",
  "Premier League",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Bundesliga",

  "Serie A",
  "Serie A",

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
  "Brighton & Hove Albion - Liverpool",
  "Manchester United - Tottenham Hotspur",

  "Levante - Espanyol",
  "Granada - Elche",
  "Villarreal - Celta de Vigo",
  "Getafe - Valencia",

  "Hoffenheim - Bayern München",

  "Sampdoria - Juventus",
  "Milan - Empoli",

  "Aldosivi - Tigre",
  "Huracán - Godoy Cruz",
  "Rosario Central - Barracas Central",
  "Sarmiento - Newell's Old Boys",
  "Talleres Córdoba - San Lorenzo"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,brighton-hove-albion,liverpool,505926.php",
  "https://es.fcstats.com/partido,manchester-united,tottenham-hotspur,505931.php",

  "https://es.fcstats.com/partido,levante,espanyol-barcelona,509897.php",
  "https://es.fcstats.com/partido,granada,elche,509896.php",
  "https://es.fcstats.com/partido,villarreal,celta-de-vigo,509901.php",
  "https://es.fcstats.com/partido,getafe,valencia,509895.php",

  "https://es.fcstats.com/partido,hoffenheim,bayern-munchen,508862.php",

  "https://es.fcstats.com/partido,sampdoria,juventus-torino,523566.php",
  "https://es.fcstats.com/partido,ac-milan,empoli,523561.php",

  "https://es.fcstats.com/partido,aldosivi,tigre,549224.php",
  "https://es.fcstats.com/partido,huracan,godoy-cruz,549229.php",
  "https://es.fcstats.com/partido,rosario-central,barracas-central,549234.php",
  "https://es.fcstats.com/partido,sarmiento,newells-old-boys,549235.php",
  "https://es.fcstats.com/partido,talleres-de-cordoba,san-lorenzo,549236.php",

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
  ""
  "",

  "",
  AEsp[1],
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
