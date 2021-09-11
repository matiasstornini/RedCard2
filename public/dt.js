var dt = [
  "1631359800",
  "1631368800",
  "1631368800",
  "1631368800",
  "1631368800",
  "1631368800",
  "1631368800",
  "1631377800",
  "1631377800",
  "1631386800",
  "1631372400",
  "1631365200",
  "1631376000",
  "1631385900",
  "1631367000",
  "1631367000",
  "1631367000",
  "1631367000",
  "1631367000",
  "1631377800",
  "1631386800",
  "1631394000",
  "1631401500",
  "1631409000"
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
