$(document).ready(function(){
  $("#form1").submit(function(event){
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var answer = "";
    // debugger;

    if (side1 === side2 && side1 === side3 && side2 === side3){
      answer = "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side3 === side1){
      answer= "isosceles";
    } else if (side1 != side2 || side3) {
      answer= "scalene";
    } else if (side1 + side2 <= side3) {
      answer= "not a triangle";
    }

    else{
      console.log("something broke!");
    }

    $("#triangle").text(answer);
    $("#answer").show();
    event.preventDefault();
  });
});
