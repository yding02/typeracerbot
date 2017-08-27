var oldDate = Date;
Date = function() {
  var date = new oldDate();
  var c = date.getTime();
  date.getTime = function() {
    c + 300000;
  };
  return date;
}
