var dt = [
  "1628940600",
  "1628949600",
  "1628949600",
  "1628949600",
  "1628949600",
  "1628949600",
  "1628958600",
  "1628962200",
  "1628962200",
  "1628971200",
  "1628971200",
  "1628953200",
  "1628967600",
  "1628947800",
  "1628947800",
  "1628947800",
  "1628947800",
  "1628947800",
  "1628958600",
  "1628958600",
  "1628966700",
  "1628974800",
  "1628982900",
  "1628971200",
  "1628980800",
  "1628989200"
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
