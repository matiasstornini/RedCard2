var dt = [
  "1629637200",
  "1629637200",
  "1629646200",
  "1629644400",
  "1629653400",
  "1629662400",
  "1629649800",
  "1629649800",
  "1629657900",
  "1629657900",
  "1629639000",
  "1629646200",
  "1629649800",
  "1629657900",
  "1629666000",
  "1629674100",
  "1629658800",
  "1629666000",
  "1629673500"
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
