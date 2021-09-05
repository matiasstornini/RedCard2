var dt = [
  "1630857600",
  "1630867500",
  "1630867500",
  "1630867500",
  "1630868400",
  "1630875600",
  "1630879200",
  "1630879200",
  "1630890000",
  "1630859400",
  "1630859400",
  "1630879200",
  "1630887300",
  "1630857600",
  "1630864800",
  "1630868400",
  "1630872000",
  "1630890600",
  "1630962000"
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
