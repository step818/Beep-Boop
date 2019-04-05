$(document).ready(function(){
  $("form#hal9000").submit(function(event){
    event.preventDefault();
    var array = [];
    var finalNum = parseInt($("input#inputNumber").val());
    console.log(finalNum);

    for (var i = 0; i <= finalNum; i++){
      array.push(i);
    }
    console.log(array);

    var halsAnswer = array.toString();

    $("#output").append(halsAnswer);
  });
  $("#refresh").click(function(){
    location.reload();
  });
});
