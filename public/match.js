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

  "Ligue 1 (Francia)",
  "Ligue 1 (Francia)",

  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",
  "Bundesliga (Alemania)",

  /*"Copa Argentina","Copa Argentina",/*"Copa Argentina",*/
  "Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",
  "Liga Profesional (Argentina)",

  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",
  "Liga BetPlay (Colombia)",

  "ERROR"
];
let Match = [
  " Manchester United - Leeds United ",
  " Burnley - Brighton & Hove Albion ",
  " Chelsea - Crystal Palace ",
  " Everton - Southampton ",
  " Leicester City - Wolverhampton Wanderers ",
  " Watford - Aston Villa ",
  " Norwich City - Liverpool ",
  " Cádiz - Levante ",
  " Mallorca - Real Betis ",
  " Deportivo Alavés - Real Madrid ",
  " Osasuna - Espanyol ",
  " Lille - Nice ",
  " PSG - Strasbourg ",
  " Arminia Bielefeld - Hoffenheim ",
  " Augsburg - Greuther Fürth ",
  " Stuttgart - Bayer Leverkusen ",
  " Union Berlin - Bochum ",
  " Wolfsburg - Eintracht Frankfurt ",
  " Borussia Dortmund - RB Leipzig ",
  " Atlético Tucumán - Aldosivi ",
  " Argentinos Juniors - Banfield ",
  " River Plate - Vélez Sarsfield ",
  " Rosario Central - Independiente ",
  " Envigado - Alianza Petrolera ",
  " Medellín - América de Cali ",
  " Deportivo Cali - Millonarios "
];

let Est = [
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027019/manchester-united-vs-leeds-united/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027020/burnley-vs-brighton-hove-albion/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027021/chelsea-vs-crystal-palace/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027022/everton-vs-southampton/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027023/leicester-city-vs-wolverhampton-wanderers/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027024/watford-vs-aston-villa/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4027025/norwich-city-vs-liverpool/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4045995/cadiz-vs-levante/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4045994/mallorca-vs-real-betis/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4045991/deportivo-alaves-vs-real-madrid/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4045996/osasuna-vs-espanyol/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042775/lille-vs-nice/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042779/psg-vs-strasbourg/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042462/arminia-bielefeld-vs-freiburg/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042461/augsburg-vs-hoffenheim/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042459/stuttgart-vs-greuther-f-rth/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042458/union-berlin-vs-bayer-leverkusen/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042457/wolfsburg-vs-bochum/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4042456/borussia-dortmund-vs-eintracht-frankfurt/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043844/atletico-tucuman-vs-aldosivi/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043851/argentinos-juniors-vs-banfield/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043842/river-plate-vs-velez-sarsfield/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4043846/rosario-central-vs-independiente/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060731/envigado-vs-alianza-petrolera/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060732/medellin-vs-america-de-cali/ ",
  "https://pirlotv4.herokuapp.com/full/app/test/statistics?url=https://m.livesoccertv.com/es/match/4060734/deportivo-cali-vs-millonarios/ "
];

let Enl = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",

  AEsp[0],
  AEsp[1],
  "",
  "",

  "",
  AFra[0],

  "",
  "",
  "",
  "",
  "",
  "",

  "",
  AArg[0],
  "",
  "",

  "",
  "",
  "",

  "error"
];

let HOY = "13/08/2021";

//console.log<b>(Est)</b></b>;
