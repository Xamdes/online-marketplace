function getValue(idName)
{
  return $(idName).val();
}

function setText(idName,value)
{
  $(idName).text(value);
}

function showResponse()
{
  $(purchase-response).show();
  $(purchase-receeipt).show();
}

$(function(){
  var userName = "#fullName";
  var address1 = "#address1";
  var address2 = "#address2";
  var cityState = "#address3";
  var zipcode = "#zipcode";

  getValue();

});
