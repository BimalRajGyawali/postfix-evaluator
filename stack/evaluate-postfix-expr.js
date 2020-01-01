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
    
    var result = operate(pop2,pop1,postfix[i]).toString();
    stack.push(result);
//  console.log(stack); /*UNCOMMENT THIS TO TRACE WHOLE STACK STAGES*/
    
  }
}
  return stack[0];

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

var result = evaluatePostFixExpression('54*62/+78*-'); /*ENTER POSTFIX EXPRESSION AS PARAMETER*/
console.log(result);
