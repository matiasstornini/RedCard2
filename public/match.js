let Title = [
  "Premier League",
  "Premier League",

  "Coppa Italia",

  "Copa del Rey",

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
  "Liverpool - Leicester City",
  "Wolverhampton Wanderers - Arsenal",

  "Juventus - Sassuolo",

  "Athletic Club - Valencia",

  "Patronato - Argentinos Juniors",
  "Sarmiento - Atlético Tucumán",
  "Central Córdoba SdE - Barracas Central",
  "Newell's Old Boys - Defensa y Justicia"
];

let Est = [
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,liverpool,leicester-city,505882.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,wolverhampton-wanderers,arsenal-london,505879.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,juventus-torino,sassuolo,548448.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,athletic-bilbao,valencia,548483.php",

  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,patronato-parana,argentinos-juniors,549154.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,sarmiento,atletico-tucuman,549155.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,central-cordoba,barracas-central,549156.php",
  "https://pirlotv2.herokuapp.com/full/app/test/est?url=https://es.fcstats.com/partido,newells-old-boys,defensa-y-justicia,549157.php",
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

  Extra[0],
  Extra[1],
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
