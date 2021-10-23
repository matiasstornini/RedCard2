var dt = [
  "1634988600",
  "1634997600",
  "1634997600",
  "1634997600",
  "1634997600",
  "1635006600",
  "1634990400",
  "1634998500",
  "1635006600",
  "1635015600",
  "1634995800",
  "1634995800",
  "1635014700",

  "1635014700",
  "1635022800",
  "1635030900",
  "1635015600",
  "1635022800",
  "1635030300",
  "1635037800",
  /*ERRORES*/
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400"
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
