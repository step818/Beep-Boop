$(document).ready(function(){
  $("form#hal9000").submit(function(event){
    event.preventDefault();
    var beep = " Beep!";
    var boop = " Boop!";
    var sorry = " I'm sorry "+ $("input#userName").val() +", I'm afraid I can't do that"
    var array = [];
    var finalNum = $("input#inputNumber").val();

    for (var i = 0; i <= finalNum; i++) {
      array.push(i);
        var multiDigit = i.toString();
        var contains3 = multiDigit.includes("3");
        var contains2 = multiDigit.includes("2");
        var contains1 = multiDigit.includes("1");

        if (contains3) {
          console.log("sorry");
          array.splice(i,1,sorry);
        } else if (contains2) {
          console.log("boop");
          array.splice(i,1,boop);
        } else if (contains1) {
          console.log("beep");
          array.splice(i,1,beep);
        }
      }
  

    var halsAnswer = array.toString();

    $("#output").text(halsAnswer);
  });
  $("#refresh").click(function(){
    location.reload();
  });
});
