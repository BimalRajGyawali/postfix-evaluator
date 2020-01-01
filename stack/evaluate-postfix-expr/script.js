function evaluatePostFixExpression(postfix){
  var stack = [];
  
  for(var i=0; i<postfix.length;i++){
  
  if(isOperand(postfix[i])){
    stack.push(postfix[i]);
    //console.log(stack); /*UNCOMMENT THIS TO TRACE WHOLE STACK STAGES*/

  }
  else{
//  console.log(postfix[i]); /*UNCOMMENT THIS TO TRACE WHOLE STACK STAGES*/
    var pop1 = parseInt(stack.pop());
    var pop2 = parseInt(stack.pop());
    
//     console.log(pop1+' '+pop2); /*UNCOMMENT THIS TO TRACE WHOLE STACK STAGES*/
    
    var result = parseInt(operate(pop2,pop1,postfix[i])).toString();
    stack.push(result);
//  console.log(stack); /*UNCOMMENT THIS TO TRACE WHOLE STACK STAGES*/
    
  }
}
   
   return stack;
}

function isOperand(arg){
  
  if(arg==='0' ||arg==='1'||arg==='2'||arg==='3'||arg==='4'||arg==='5'||arg==='6'||arg==='7'||
     arg==='8'||arg==='9'){
         return true;
       }
  
   return false;
}

function operate(value1,value2,operator){
 
   switch(operator){
     case '+' : return value1+value2;
     case '-' : return value1-value2;
     case '*' : return value1*value2;
     case '/' : return value1/value2;
   }
}





/*Here onwards involve only DOM manipulation
  Actual algorithm is already implemented
*/
var evalbtn = document.getElementById('eval');

evalbtn.addEventListener('click',function(){
  var postfix = document.getElementById('expr').value;
  var result = evaluatePostFixExpression(postfix);
  /*ENTER POSTFIX EXPRESSION AS PARAMETER*/
  var resultPara = document.getElementsByClassName('result')[0];
 

  var msg = '';

  if(isNaN(result[0]) || result.length>1){
    msg = 'Error in postfix expression';
    resultPara.classList.add('error');
  }else{
    msg = result[0];
    resultPara.classList.remove('error');
  }

  var resultSpan = document.getElementById('result');
  resultSpan.innerHTML = msg;

  resultPara.style.display = 'block';
  
});

var codebtn = document.getElementById('code');

codebtn.addEventListener('click',function(){
    window.location = 'https://github.com/BimalRajGyawali/Data-Structures/blob/master/stack/evaluate-postfix-expr/script.js';
});



