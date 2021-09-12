var dt = [
  "1631460600",
  "1631448000",
  "1631456100",
  "1631464200",
  "1631473200",
  "1631442600",
  "1631451600",
  "1631451600",
  "1631451600",
  "1631462400",
  "1631472300",
  "1631473200",
  "1631480400",
  "1631487900"
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
