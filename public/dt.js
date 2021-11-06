var dt = [
  "1636201800",
  "1636210800",

  "1636203600",
  "1636211700",
  "1636219800",
  "1636228800",

  "1636228800",

  "1636218000",

  "1636209000",
  "1636219800",

  "1636224300",
  "1636224300",
  "1636232400",
  "1636240500",

  "1636224300",
  "1636231500",
  "1636239600",
  "1636247100",

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
