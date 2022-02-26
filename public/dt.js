var dt = [
  "1645878600",
  "1645887600",
  "1645896600",

  "1645880400",
  "1645888500",
  "1645896600",
  "1645905600",

  "1645894800",

  "1645896600",

  "1645905600",

  "1645905600",
  "1645905600",
  "1645913700",
  "1645921800",

  "1645902000",
  "1645909500",
  "1645917000",
  "1645924500",

  /*ERRORES*/
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400"
];

var dtprox = ["1618763400", "1618771500", "1618779600", "1618790400"];

var dta = [];
for (var i = 0; i <= dt.length; i++) {
  var date = new Date(dt[i] * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/

  dta.push(formattedTime);

  // console.log(dta[i]);
}
