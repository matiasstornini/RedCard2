let Title = [
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  /*"Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  "Premier League (Inglaterra)",
  /**/

  "LaLiga (España)",
  "LaLiga (España)",
  "LaLiga (España)",
  "LaLiga (España)",

  "Serie A (Italia)",
  "Serie A (Italia)",
  "Serie A (Italia)",
  "Serie A (Italia)",

  "Ligue 1 (Francia)",
  /*"Ligue 1 (Francia)",*/

  /*"Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  /**/

  /*"Copa Argentina","Copa Argentina",/*"Copa Argentina",*/
  "Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
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
  " Burnley - Leeds United ",
  " Tottenham Hotspur - Watford ",
  " Wolverhampton Wanderers - Manchester United ",
  " Barcelona - Getafe ",
  " Cádiz - Osasuna ",
  " Rayo Vallecano - Granada ",
  " Atlético Madrid - Villarreal ",
  " Genoa - Napoli ",
  " Sassuolo - Sampdoria ",
  " Milan - Cagliari ",
  " Salernitana - Roma ",
  " Reims - PSG ",
  " Arsenal - Defensa y Justicia ",
  " Aldosivi - Lanús ",
  " Central Córdoba SdE - Rosario Central ",
  " Vélez Sarsfield - Godoy Cruz ",
  " Boca Juniors - Racing Club ",
  " Patriotas Boyacá - Deportivo Pasto ",
  " Deportivo Cali - Junior ",
  " Santa Fe - América de Cali ",
  " Jaguares de Córdoba - Deportes Tolima "
];

let Est = [
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027046/burnley-vs-leeds-united/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027043/tottenham-hotspur-vs-watford/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027047/wolverhampton-wanderers-vs-manchester-united/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046012/barcelona-vs-getafe/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046016/cadiz-vs-osasuna/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046019/rayo-vallecano-vs-granada/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4046011/atletico-madrid-vs-villarreal/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064543/genoa-vs-napoli/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064549/sassuolo-vs-sampdoria/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064547/milan-vs-cagliari/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064548/salernitana-vs-roma/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064543/genoa-vs-napoli/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064549/sassuolo-vs-sampdoria/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064547/milan-vs-cagliari/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4064548/salernitana-vs-roma/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042798/reims-vs-psg/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043885/arsenal-vs-defensa-y-justicia/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043889/aldosivi-vs-lanus/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043884/central-cordoba-sde-vs-rosario-central/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043891/velez-sarsfield-vs-godoy-cruz/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043883/boca-juniors-vs-racing-club/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060759/patriotas-boyaca-vs-deportivo-pasto/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060754/deportivo-cali-vs-junior/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060752/santa-fe-vs-america-de-cali/ ",
  "https://pirlotv2.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060757/jaguares-de-cordoba-vs-deportes-tolima/ "
];

let Enl = [
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
  "",

  AFra[0],

  "",
  AArg[0],
  AArg[1],
  "",
  "",

  ACol[0],
  "",
  "",
  "",

  "",
  "",
  "",

  "",
  "error"
];

let HOY = "29/08/2021";

//console.log<b>(Est)</b></b>;
