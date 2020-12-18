function realizaroperation(operacion,num1,num2){
    var result;
switch(operacion){
    case "r1":
    result=num1+num2;
    break;
    case "r2":
        result=num1-num2;
        break;
    case "r3":
        result=num1*num2;
        break;
    case "r4":
        if(num2===0){
            result="you can not dividir A 0";
        }            
        else{
            result=num1/num2;
    }
    break;

}
return result;
}

function clickbutton(){
    // alert("you click in this button");
 let num11=Number(document.getElementById("num1").value);
 let num22=Number(document.getElementById("num2").value);
 let operations=document.querySelector("input[name=flexRadioDefault]:checked").getAttribute("id");
 const results=realizaroperation(operations,num11,num22);
 document.querySelector("#txt_resultado").value=String(results);
  }
  var compo=document.getElementById("cho");


  compo.addEventListener('change',viewis)
 


function viewis(){
    console.log(compo.value);
}
//document.querySelector("input[name=flexRadioDefault]:checked").getAttribute("id");