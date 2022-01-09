let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "Ligue 1",
  "FA CUP",
  "FA CUP",
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

  "Liverpool - Shrewsbury Town",
  "Nottingham Forest - Arsenal",

  "Venezia - Milan",
  "Napoli - Sampdoria",
  "Roma - Juventus",
  "Internazionale - Lazio"
];

let Est = [
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,rayo-vallecano,real-betis,509817.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,sevilla,getafe,509820.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,deportivo-alaves,athletic-bilbao,509812.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,osasuna,cadiz,509816.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,villarreal,atletico-madrid,509821.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,olympique-lyon,paris-saint-germain,508066.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,liverpool,shrewsbury-town,545565.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,nottingham-forest,arsenal-london,545570.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,venezia,ac-milan,523489.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,napoli,sampdoria,523486.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,as-roma,juventus-torino,523481.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,internazionale-milano,ss-lazio,523485.php",

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

  AIng[0],
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
