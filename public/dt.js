var dt = [
  "1631964600",
  "1631973600",
  "1631973600",
  "1631973600",
  "1631973600",
  "1631982600",
  "1631966400",
  "1631974500",
  "1631982600",
  "1631991600",
  "1631970000",
  "1631980800",
  "1631990700",
  "1631971800",
  "1631971800",
  "1631971800",
  "1631971800",
  "1631982600",
  "1631982600",
  "1631990700",
  "1631998800",
  "1632006900",
  "1631991600",
  "1631998800",
  "1632006300",
  "1632013800"
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
