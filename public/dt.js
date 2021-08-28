var dt = [
  "1630150200",
  "1630159200",
  "1630159200",
  "1630159200",
  "1630159200",
  "1630159200",
  "1630168200",
  "1630162800",
  "1630171800",
  "1630171800",
  "1630180800",
  "1630168200",
  "1630168200",
  "1630176300",
  "1630176300",
  "1630157400",
  "1630157400",
  "1630168200",
  "1630176300",
  "1630184400",
  "1630192500",
  "1630184400",
  "1630191900",
  "1630199400"
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
