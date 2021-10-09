var tipGlobal;
$(".tip-box").click(function(element){

  var billValue = $("#billValue").val();
  if (billValue ===""){
    billValue = 0;
  }
  else{
    billValue = parseFloat(billValue);
  }
  var peopleNumber = $("#peopleValue").val();
  if (peopleNumber === "" || peopleNumber ==="0"){
    peopleNumber = 0;
    throwError();
  } else{
    $("#peopleValue").removeClass("error");
    peopleNumber = parseFloat(peopleNumber);
    $(".cantbe").removeClass("cantbeShow");
  }
  console.log("Bill value: "+billValue+"\nPeople number:"+peopleNumber);
  var tipText =(element.currentTarget.innerHTML);
  var tipPtg = parseFloat(tipText.substring(4, tipText.length - 6));
  $(".tip-box").removeClass("box-selected");
  element.currentTarget.classList.add("box-selected");
  console.log(tipPtg);
  tipGlobal = tipPtg;

  if(peopleNumber != 0){
    calculate(billValue, peopleNumber, tipPtg);
  }
});

function throwError(){
  $("#peopleValue").addClass("error");
  $(".cantbe").addClass("cantbeShow");
}

function calculate(valor, personas, porcentaje){
  var propinaPorPersona = porcentaje * valor / 100 / personas;
  console.log("Propina por persona: "+propinaPorPersona);
  $(".resultTip").text(propinaPorPersona.toFixed(2));

  var valorTotalPorPersona = valor/personas +propinaPorPersona;
  console.log("Total por persona: "+valorTotalPorPersona);
  $(".resultTotal").text(valorTotalPorPersona.toFixed(2));


}

$(".reset").click(function(){
  var billValue = $("#billValue").val();
  if (billValue ===""){
    billValue = 0;
  }
  else{
    billValue = parseFloat(billValue);
  }
  var peopleNumber = $("#peopleValue").val();
  if (peopleNumber === "" || peopleNumber ==="0"){
    peopleNumber = 0;
    throwError();
  } else{
    $("#peopleValue").removeClass("error");
    peopleNumber = parseFloat(peopleNumber);
    $(".cantbe").removeClass("cantbeShow");
  }
  console.log("Bill value: "+billValue+"\nPeople number:"+peopleNumber);
  if(peopleNumber != 0){
    calculate(billValue, peopleNumber, tipGlobal);
  }
  else{
    throwError();
  }
});
