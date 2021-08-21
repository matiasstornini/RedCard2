var dt = [
  "1629545400",
  "1629554400",
  "1629554400",
  "1629554400",
  "1629554400",
  "1629558000",
  "1629567000",
  "1629567000",
  "1629576000",
  "1629563400",
  "1629563400",
  "1629571500",
  "1629571500",
  "1629563400",
  "1629563400",
  "1629571500",
  "1629579600",
  "1629587700",
  "1629572400",
  "1629579600",
  "1629587100",
  "1629594600"
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
