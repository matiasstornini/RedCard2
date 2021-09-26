var dt = [
  "1632652200",
  "1632661200",
  "1632670200",
  "1632657600",
  "1632665700",
  "1632673800",
  "1632673800",
  "1632682800",
  "1632673800",
  "1632681900",
  "1632690000",
  "1632698100",
  "1632682800",
  "1632690000",
  "1632705000"
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
