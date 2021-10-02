var dt = [
  "1633174200",
  "1633183200",
  "1633183200",
  "1633183200",
  "1633183200",
  "1633192200",
  "1633176000",
  "1633184100",
  "1633192200",
  "1633201200",
  "1633190400",
  "1633200300",
  "1633181400",
  "1633192200",
  "1633192200",
  "1633200300",
  "1633208400",
  "1633216500",
  "1633208400",
  "1633294800",
  "1633215900",
  "1633223400",

  /*ERROR =>*/
  "1618790400",
  "1618790400",
  "1618790400",
  "1618790400",
  "1618790400"
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
