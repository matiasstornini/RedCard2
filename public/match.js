let Title = [
  " Premier League ",
  " Premier League ",
  " Premier League ",
  " Premier League ",
  " Premier League ",
  " Premier League ",
  " LaLiga ",
  " LaLiga ",
  " LaLiga ",
  " LaLiga ",
  " Bundesliga ",
  " Bundesliga ",
  " Serie A ",
  " Liga Profesional Argentina ",
  " Liga Profesional Argentina ",
  " Liga Profesional Argentina ",
  " Liga Dimayor Colombia ",
  " Liga Dimayor Colombia ",
  " Liga Dimayor Colombia ",
  " Liga Dimayor Colombia ",

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
  "Chelsea - Norwich City",
  "Crystal Palace - Newcastle United",
  "Everton - Watford",
  "Leeds United - Wolverhampton Wanderers",
  "Southampton - Burnley",
  "Brighton & Hove Albion - Manchester City",

  "Valencia - Mallorca",
  "Cádiz - Deportivo Alavés",
  "Elche - Espanyol",
  "Athletic Club - Villarreal",

  "Arminia Bielefeld - Borussia Dortmund",
  "Bayern München - Hoffenheim",

  "Bologna - Milan",

  "Gimnasia La Plata - Central Córdoba SdE",
  "Defensa y Justicia - Platense",
  "Rosario Central - Racing Club",

  "Patriotas Boyacá - Deportivo Pereira",
  "Atlético Bucaramanga - Deportivo Pasto",
  "Medellín - Deportes Tolima",
  "Millonarios - Junior"
];

let Est = [
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3765354/Chelsea-v-Norwich ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3765355/Crystal-Palace-v-Newcastle ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3765356/Everton-v-Watford ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3765357/Leeds-v-Wolverhampton ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3765359/Southampton-v-Burnley ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3765353/Brighton-v-Man-City ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/4154360/Valencia-v-Mallorca ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/4154357/Cadiz-v-CD-Alaves ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/4154361/Elche-v-Espanyol ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/4154353/Athletic-Bilbao-v-Villarreal ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3699566/Bayern-Munich-v-TSG-Hoffenheim ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3699572/Arminia-Bielefeld-v-Borussia-Dortmund ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3785681/Bologna-v-AC-Milan ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3710565/Gimnasia-LP-v-Central-Cordoba-SdE ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3714054/Defensa-y-Justicia-v-CA-Platense ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3710275/Rosario-Central-v-Racing-Club ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3797270/Patriotas-FC-v-Deportivo-Pereira ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3797192/Atletico-Bucaramanga-v-Deportivo-Pasto ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3796628/Independiente-Medellin-v-Deportes-Tolima ",
  "https://pirlotv2.herokuapp.com/full/app/test/general-ext?url=https://es.betsapi.com//r/3797194/Millonarios-v-Junior ",

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
  "",
  AEsp[0],

  "",
  "",

  AIta[0],

  AArg[0],
  "",
  "",

  ACol[0],
  "",
  "",
  "",

  "error1",
  "error1",
  "error1",
  "error1",
  "error1",
  "error1",
  "error1",
  "error1",
  "error1"
];

let HOY = "23/10/2021";

//console.log<b>(Est)</b></b>;
