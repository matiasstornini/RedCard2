var dt = [
  "1630242000",
  "1630242000",
  "1630251000",
  "1630249200",
  "1630258200",
  "1630258200",
  "1630267200",
  "1630254600",
  "1630254600",
  "1630262700",
  "1630262700",
  "1630262700",
  "1630254600",
  "1630262700",
  "1630262700",
  "1630270800",
  "1630278900",
  "1630263600",
  "1630270800",
  "1630278300",
  "1630285800"
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
