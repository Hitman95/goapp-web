function getSum() {
  var a = $("#a").val()
  var b = $("#b").val()
  var y = location.protocol;
  var x = location.hostname;

  console.log("Summing: " + a + " and " + b);

  $.get(y + "//" + x + "/api/sum/?a=" + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
          .append(" Result: " + data.Result + "<br>")
    }, "json");

}

function getDiff() {
  var a = $("#c").val()
  var b = $("#d").val()
  var y = location.protocol;
  var x = location.hostname;

  console.log("Difference between: " + a + " and " + b);

  $.get(y + "//" + x + "/api/diff/?a=" + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
      .append(" Result: " + data.Result + "<br>")
    }, "json");

}

