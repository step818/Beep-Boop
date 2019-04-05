$(document).ready(function(){
  $("form#hal9000").submit(function(event){
    event.preventDefault();

    var finalNum = parseInt($("input#inputNumber").val());
    console.log(finalNum);

    $("#output").append(finalNum);
  });
  $("#refresh").click(function(){
    location.reload();
  });
});
