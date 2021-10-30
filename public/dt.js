var dt = [
  "1635593400",
  "1635602400",
  "1635602400",
  "1635602400",
  "1635602400",
  "1635602400",
  "1635611400",
  "1635595200",
  "1635603300",
  "1635611400",
  "1635620400",
  "1635609600",
  "1635600600",
  "1635600600",
  "1635619500",
  "1635619500",
  "1635627600",
  "1635627600",
  "1635639000",
  "1635638700",
  "1635642600",
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
