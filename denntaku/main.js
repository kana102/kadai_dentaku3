var result = "";
var is_calc = false;

window.onload = function () {
  result = document.getElementById('result');
};

function c_click(){
  result.value = "0";
  is_calc = false;
}


function num_click(val){
  if(is_calc)  result.value = "0","00";
  is_calc = false;  

  if(result.value =="0" && val == "0"){
    result.value = "0";
  }else if(result.value == "0" && val == "."){
    result.value = "0.";
  }else if(result.value == "0" && val == "00"){
    result.value = "0";
  }else if(result.value == "0"){
    result.value = val;
  }else{
    result.value += val;
  }
}


function dot_click(){

  let is_decimal = false;
  
  let number = result.value;
  
  let number_list = number.split("");
  
  for(let i = number_list.length -1; i >= 0; i--){
    
    let char = number_list[i];
    
    if(["+","-","*","/"].includes(char)){
      break;
    }
    
    if(char === "."){
      is_decimal = true;
    }
  }
  
  
  if(is_decimal){
    
  }else{
    
    result.value += ".";
  }
}


function ope_click(val){
  if(is_calc)  is_calc = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
}



function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);

  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
}


function is_ope_last(){
  return ["+","-","*","/",".","00"].includes(result.value.toString().slice(-1));
}