var dt = [
  "1632331800",
  "1632331800",
  "1632340800",
  "1632340800",
  "1632337200",
  "1632328200",
  "1632328200",
  "1632336300",
  "1632336300",
  "1632357000",
  "1632348900",
  "1632358800"
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
