$(function() {
  $("#btn-submit").click(function()
  {
    var userName = "";
    var address1 = "";
    var address2 = "";
    var city = "";
    var state = ""
    var zipcode = "";
    var outputAddress1 = "";
    var outputAddress2 = "";
    var outputAddress3 = "";
    var outputAddress4 = "";

    userName = $("#fullName").val();
    address1 = $("#address1").val();
    address2 = $("#address2").val();
    city = $("#city").val();
    state = $("#state").val();
    zipcode = $("#zipcode").val();

    outputAddress1 = userName;
    outputAddress2 = address1;
    outputAddress3 = address2;
    outputAddress4 = city.concat(", ",state," ",zipcode);

    $(".userName").text(userName);

    $("#receipt-address1").text(outputAddress1);
    $("#receipt-address2").text(outputAddress2);
    $("#receipt-address3").text(outputAddress3);
    $("#receipt-address4").text(outputAddress4);

    $("#purchase-response").show();
    $("#purchase-receipt").show();

    event.preventDefault();
  });
});
