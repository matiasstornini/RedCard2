let Title = [
  /*"Clasificatorio para la Copa del Mundo",
  "Clasificatorio para la Copa del Mundo",
  "Clasificatorio para la Copa del Mundo",
  "Clasificatorio para la Copa del Mundo",
  "Clasificatorio para la Copa del Mundo",
  "Clasificatorio para la Copa del Mundo",
  "Clasificatorio para la Copa del Mundo",
  "Clasificatorio para la Copa del Mundo",
  "Clasificatorio para la Copa del Mundo",/**/

  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  /**/

  "LaLiga (España)",
  "LaLiga (España)",
  /*"LaLiga (España)",
  "LaLiga (España)",
  /**/

  "Ligue 1 (Francia)",

  "Serie A (Italia)",
  "Serie A (Italia)",
  "Serie A (Italia)",
  /*"Serie A (Italia)",*/

  /*"Ligue 1 (Francia)",*/

  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  /**/

  /*"Copa Argentina","Copa Argentina",/*"Copa Argentina",*/
  /*"Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  /*"Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  /*"Liga Profesional (Argentina)",
  /*"Liga Profesional (Argentina)",*/

  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",

  /*"Conmebol Libertadores",
  /*"Conmebol Libertadores",*/
  /*"Conmebol Sudamericana",
  "Conmebol Sudamericana",22*/

  "ERROR"
];
let Match = [
  " Crystal Palace - Tottenham Hotspur ",
  " Arsenal - Norwich City ",
  " Brentford - Brighton & Hove Albion ",
  " Leicester City - Manchester City ",
  " Manchester United - Newcastle United ",
  " Southampton - West Ham United ",
  " Watford - Wolverhampton Wanderers ",
  " Chelsea - Aston Villa ",
  " Levante - Rayo Vallecano ",
  " Athletic Club - Mallorca ",
  " PSG - Clermont ",
  " Empoli - Venezia ",
  " Napoli - Juventus ",
  " Atalanta - Fiorentina ",
  " Bayer Leverkusen - Borussia Dortmund ",
  " Freiburg - Köln ",
  " Greuther Fürth - Wolfsburg ",
  " Hoffenheim - Mainz 05 ",
  " Union Berlin - Augsburg ",
  " RB Leipzig - Bayern München ",
  " Patriotas Boyacá - Envigado ",
  " Once Caldas - Rionegro Águilas ",
  " Deportivo Cali - América de Cali ",
  " Santa Fe - Alianza Petrolera "
];

let Est = [
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027051/crystal-palace-vs-tottenham-hotspur/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027048/arsenal-vs-norwich-city/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027049/brentford-vs-brighton-hove-albion/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027054/leicester-city-vs-manchester-city/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027055/manchester-united-vs-newcastle-united/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027056/southampton-vs-west-ham-united/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027057/watford-vs-wolverhampton-wanderers/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027050/chelsea-vs-aston-villa/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046026/levante-vs-rayo-vallecano/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046021/athletic-club-vs-mallorca/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042809/psg-vs-clermont/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064554/empoli-vs-venezia/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064556/napoli-vs-juventus/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064551/atalanta-vs-fiorentina/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042484/bayer-leverkusen-vs-borussia-dortmund/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042487/freiburg-vs-koln/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042490/greuther-f-rth-vs-wolfsburg/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042488/hoffenheim-vs-mainz-05/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042485/union-berlin-vs-augsburg/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042482/rb-leipzig-vs-bayern-m-nchen/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060775/patriotas-boyaca-vs-envigado/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060770/once-caldas-vs-rionegro-aguilas/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060772/deportivo-cali-vs-america-de-cali/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060771/santa-fe-vs-alianza-petrolera/ "
];

let Enl = [
  "" /*1*/,
  "",
  "",
  "",
  "",
  "",
  "",
  AIng[0],

  AEsp[0],
  "",

  AFra[0],

  "",
  AIta[0],
  "",

  "",
  "",
  "",
  "",
  "",
  AAle[0],

  "",
  "",
  "",
  "",

  "",
  "error"
];

let HOY = "11/09/2021";

//console.log<b>(Est)</b></b>;
//console.log<b>(Est)</b></b>;
