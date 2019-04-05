$(document).ready(function(){
  $("form#hal9000").submit(function(event){
    event.preventDefault();
    var beep = "Beep!";
    var boop = "Boop!";
    var sorry = "Im sorry Dave, Im afraid I cannot do that."
    var array = [];
    var finalNum = $("input#inputNumber").val();

    for (var i = 0; i <= finalNum; i++){
      array.push(i);
      if (array[i] === 1 || array[i] === 2 || array[i] === 3) {
        if (array[i] === 3) {
          array[i] = sorry;
        } else if (array[i] === 2) {
          array[i] = boop;
        } else {
          array[i] = beep;
        }
      }
    }

    console.log(array);




    var halsAnswer = array.toString();

    $("#output").append(halsAnswer);
  });
  $("#refresh").click(function(){
    location.reload();
  });
});
