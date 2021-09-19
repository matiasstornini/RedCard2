var dt = [
  "1632056400",
  "1632056400",
  "1632065400",
  "1632052800",
  "1632060900",
  "1632069000",
  "1632078000",
  "1632065400",
  "1632077100",
  "1632163500",
  "1632058200",
  "1632065400",
  "1632069000",
  "1632077100",
  "1632077100",
  "1632085200",
  "1632093300",
  "1632085200",
  "1632092700",
  "1632100200"
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
