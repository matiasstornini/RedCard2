let Title = [
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",

  "LaLiga (España)",
  "LaLiga (España)",
  "LaLiga (España)",
  "LaLiga (España)",

  "Serie A (Italia)",
  "Serie A (Italia)",
  "Serie A (Italia)",
  "Serie A (Italia)",
  /*"Ligue 1 (Francia)",*/
  /*"Ligue 1 (Francia)",*/

  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  /*"Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",*/

  /*"Copa Argentina","Copa Argentina",/*"Copa Argentina",*/
  "Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  /*"Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  /*"Liga Profesional (Argentina)",*/

  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",

  /*"Conmebol Libertadores",
  /*"Conmebol Libertadores",*/
  /*"Conmebol Sudamericana",
  "Conmebol Sudamericana",*/

  "ERROR"
];
let Match = [
  " Manchester City - Arsenal ",
  " Aston Villa - Brentford ",
  " Brighton & Hove Albion - Everton ",
  " Newcastle United - Southampton ",
  " Norwich City - Leicester City ",
  " West Ham United - Crystal Palace ",
  " Liverpool - Chelsea ",
  " Celta de Vigo - Athletic Club ",
  " Elche - Sevilla ",
  " Real Sociedad - Levante ",
  " Real Betis - Real Madrid ",
  " Atalanta - Bologna ",
  " Lazio - Spezia ",
  " Fiorentina - Torino ",
  " Juventus - Empoli ",
  " Mainz 05 - Greuther Fürth ",
  " Stuttgart - Freiburg ",
  " Bayern München - Hertha BSC ",
  " Gimnasia La Plata - Huracán ",
  " Banfield - Platense ",
  " Independiente - Colón ",
  " Envigado - La Equidad ",
  " Deportivo Pereira - Millonarios ",
  " Atlético Huila - Medellín "
];

let Est = [
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027038/manchester-city-vs-arsenal/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027039/aston-villa-vs-brentford/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027040/brighton-hove-albion-vs-everton/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027041/newcastle-united-vs-southampton/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027042/norwich-city-vs-leicester-city/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027044/west-ham-united-vs-crystal-palace/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027045/liverpool-vs-chelsea/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046014/celta-de-vigo-vs-athletic-club/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046020/elche-vs-sevilla/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046017/real-sociedad-vs-levante/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046013/real-betis-vs-real-madrid/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064541/atalanta-vs-bologna/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064546/lazio-vs-spezia/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064542/fiorentina-vs-torino/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064545/juventus-vs-empoli/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042478/mainz-05-vs-greuther-f-rth/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042477/stuttgart-vs-freiburg/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042473/bayern-m-nchen-vs-hertha-bsc/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043890/gimnasia-la-plata-vs-huracan/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043882/banfield-vs-platense/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043887/independiente-vs-colon/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060755/envigado-vs-la-equidad/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060758/deportivo-pereira-vs-millonarios/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060756/atletico-huila-vs-medellin/ "
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

  "",
  "",
  ACol[0],

  "",
  "error"
];

let HOY = "28/08/2021";

//console.log<b>(Est)</b></b>;
