var dt = [
  "1633266000",
  "1633266000",
  "1633266000",
  "1633275000",

  "1633262400",
  "1633270500",
  "1633278600",
  "1633278600",
  "1633287600",

  "1633258800",

  "1633276800",
  "1633276800",
  "1633286700",

  "1633275000",

  "1633278600",
  "1633278600",
  "1633291200",
  "1633302900",

  "1633294800",
  "1633302300",
  "1633309800"
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
